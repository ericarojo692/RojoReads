class Api::V1::Shelf < ApplicationRecord
    belongs_to :user
    belongs_to :book
end
