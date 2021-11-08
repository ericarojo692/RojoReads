class Api::V1::BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre,  :pub_date, :image, :book_reviews, :book_ratings, :shelf, :shelves

  def book_reviews 
    object.reviews.map do |review|
      review.content
    end
  end

  def book_ratings
    object.ratings.map do |rating|
      rating.rating
    end
  end

  def shelf 
    object.shelves.map do |shelf|
      shelf.id
    end
  end

  has_many :shelves
end
