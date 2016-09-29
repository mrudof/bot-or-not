class UsersController < ApplicationController
  def index
    users = current_user.game.users
    render json: users.to_json
  end

  def create
    games = Game.all
    game_with_key_id = ""
    user_key_code = params[:key_code].strip.downcase
    @current_game = ""

    games.each do |game|
        if game.key_code == user_key_code
           game_with_key_id = game.id
           @current_game = game
        end
    end

    if @current_game.users.length < 10
      @user = User.new(name: params[:name], creator: params[:creator], game_id: game_with_key_id)
    end

    if @user.nil?
      @errors = ["Max 10 players in a game"]
      render 'pages/index'
    elsif @user.save
      create_session @user
      redirect_to '/games/new'
    else
      @errors = @user.errors.full_messages
      render 'pages/index'
    end
  end

  def choose
    #using this to update users who have chosen quests. Is there a better route for this?
    game = Game.find(params[:game_id])
    render json: game.next_up
  end

  def update
    numberOfEvil = {2 => 1, 3=> 1, 4=> 2, 5 => 2, 6 => 2, 7 => 3, 8=> 3, 9=> 3, 10=> 4}
    goodPlayerArr = ["Pan", "Generic Human", "Adama", "Ripley", "Deckard", "Sarah Connor"]
    evilPlayerArr = ["Boomer", "Ash", "The Terminator", "Rachael"]
    players = current_user.game.users
    numberOfPlayers = players.length
    rand_array = (1..players.length).to_a.shuffle
    players = players.shuffle
# hard coded for 5 players
    players.each_with_index do |player, i|
      if (rand_array[i] <= numberOfEvil[numberOfPlayers])
        attrib = false
        char = evilPlayerArr.pop
      else
        attrib = true
        char = goodPlayerArr.pop
      end
      player.update(good: attrib)
      player.update(order: (i + 1))
      player.update(character: char)
    end

    redirect_to "/games"

  end
  def show
    user = User.find(params[:id])
    render json: user.to_json
  end

end
