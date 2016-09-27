class UsersController < ApplicationController

  def create
    games = Game.all
    game_with_key_id = ""
    user_key_code = params[:key_code]
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
    if @user.save
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
    players = current_user.game.users
    rand_array = (1..players.length).to_a.shuffle
    players = players.shuffle

    players.each_with_index do |player, i|
      if (rand_array[i] < 3)
        attrib = false
      else
        attrib = true
      end
      player.update(good: attrib)
      player.update(order: (i + 1))
    end

    redirect_to "/games"

  end


end
