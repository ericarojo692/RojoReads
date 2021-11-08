class Api::V1::ReviewSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :content
end
