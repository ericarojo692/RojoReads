class Api::V1::RatingSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :rating
end
