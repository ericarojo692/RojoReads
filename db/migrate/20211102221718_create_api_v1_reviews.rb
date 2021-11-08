class CreateApiV1Reviews < ActiveRecord::Migration[6.1]
  def change
    create_table :api_v1_reviews do |t|
      t.integer :book_id
      t.string :content

      t.timestamps
    end
  end
end
