class Api::V1::UsersController < ApplicationController
    User = Api::V1::User
    # skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_response


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
        user = User.find_by(id: params[:id])
        render json: user
    end

    private
    
    def render_unprocessable_response(invalid)
        render json: { errors: "Username and/or Password Cannot Be Blank" }, status: :unprocessable_entity
      end

    
    def user_params
        params.require(:user).permit(:name, :password, :fav_genre, :bio)
    end

    def update_params
        params.require(:user).permit(:name, :fav_genre, :bio)
    end
end
