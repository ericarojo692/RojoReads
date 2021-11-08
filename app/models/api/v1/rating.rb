class Api::V1::Rating < ApplicationRecord
    belongs_to :book

    validates :rating, length: {in: 0..5}
end
