class Api::V1::ReviewsController < ApplicationController
    Review = Api::V1::Review
    
    def index
        render json: Review.all
    end

    def create
        review = Review.create(book_id:params[:book_id], content:params[:content])
        render json: review, status: :created
    end
end
