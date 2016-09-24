class UsersController < ApplicationController
  def create
    games = Game.all
    game_with_key_id = ""
    games.each do |game|
        if game.key_code == params[:key_code]
           game_with_key_id = game.id
        end
    end
    @user = User.new(name: params[:name], creator: params[:creator], game_id: game_with_key_id)
    if @user.save!
      create_session @user

      redirect_to "/games/new"
    end
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

  end


  private

end
