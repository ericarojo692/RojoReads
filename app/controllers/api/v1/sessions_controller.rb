class Api::V1::SessionsController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create 
        user = Api::V1::User.find_by(name:params[:name])
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ['incorrect user and/or password']}, status: :unauthorized
        end
    end

    def me
        if current_user
            render json: @current_user, status: :ok
        else
            render json: { error: "You are not logged in" }, status: :unauthorized
        end
      end


    def destroy
        session.delete :user_id
        head :no_content
      end
end