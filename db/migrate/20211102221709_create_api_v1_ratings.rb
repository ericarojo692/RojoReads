class CreateApiV1Ratings < ActiveRecord::Migration[6.1]
  def change
    create_table :api_v1_ratings do |t|
      t.integer :rating
      t.integer :book_id
      
      t.timestamps
    end
  end
end
