class CreateApiV1Books < ActiveRecord::Migration[6.1]
  def change
    create_table :api_v1_books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.string :pub_date
      t.string :image
      

      t.timestamps
    end
  end
end
