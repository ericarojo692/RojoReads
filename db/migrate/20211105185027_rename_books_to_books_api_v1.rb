class RenameBooksToBooksApiV1 < ActiveRecord::Migration[6.1]
  def change
    rename_table :books, :api_v1_books
  end
end
