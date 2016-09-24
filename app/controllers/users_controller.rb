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
    user = current_user

  end


  private

  def random
    game.users.length
  end
end
