class SessionsController < ApplicationController
  def new
 end

 def create
   user = User.find_by(key_code: params[:session][:key_code])
   if user.save
     session[:user_id] = user.id
     redirect_to '/games/new'
   end
 end

 # def destroy
 #   log_out
 #   redirect_to '/posts'
 # end
end
