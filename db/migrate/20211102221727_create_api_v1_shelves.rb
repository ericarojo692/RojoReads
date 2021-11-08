class CreateApiV1Shelves < ActiveRecord::Migration[6.1]
  def change
    create_table :api_v1_shelves do |t|
      t.integer :user_id
      t.integer :book_id

      t.timestamps
    end
  end
end
