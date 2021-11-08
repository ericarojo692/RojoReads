class RenameApiV1BooksToBooks < ActiveRecord::Migration[6.1]
  def change
    rename_table :api_v1_books, :books
  end
end
