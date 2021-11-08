class Api::V1::UsersController < ApplicationController
    User = Api::V1::User
    skip_before_action :authorize, only: :create

    def index
        render json: User.all
    end

    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

   
    def update 
        @current_user.update(user_params)
        render json: @current_user
    end

   
    def show 
        render json: @current_user
    end

    private

    
    def user_params
        params.require(:user).permit(:name, :password, :fav_genre, :bio)
    end

    def update_params
        params.require(:user).permit(:name, :fav_genre, :bio)
    end
end
