class Api::V1::BooksController < ApplicationController
    Book = Api::V1::Book
    before_action :authorize, only: :show

    def index
        render json: Book.all, status: :ok
    end

    def show 
        book = Book.find(params[:id])
        if book 
            render json: book 
        else 
            render json: {error: "Book not found"}
        end
    end


end
