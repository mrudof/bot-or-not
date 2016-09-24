class UsersController < ApplicationController
  def create
    games = Game.all
    game_with_key_id = ""
    games.each do |game|
        if game.key_code == params[:key_code]
           game_with_key_id = game.id
        end
    end
    @user = User.create(name: params[:name], creator: params[:creator], game_id: game_with_key_id)
    if @user.save
      join_game @user

      redirect_to "/games/new"
    end
  end
end
