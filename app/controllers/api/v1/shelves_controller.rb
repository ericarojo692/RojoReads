class Api::V1::ShelvesController < ApplicationController
    Shelf = Api::V1::Shelf
    # skip_before_action :authorize, only: :show
    
    def index
        render json: Shelf.all
    end

    def show 
        shelf = Shelf.find(params[:id])
        render json: shelf
    end

    def create 
        shelf = Shelf.create(book_id:params[:book_id], user_id:session[:user_id])
        render json: shelf
    end

    def destroy 
        shelf = Shelf.find(params[:id])
        shelf.destroy
    end
end
