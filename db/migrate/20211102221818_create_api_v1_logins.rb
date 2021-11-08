class CreateApiV1Logins < ActiveRecord::Migration[6.1]
  def change
    create_table :api_v1_logins do |t|

      t.timestamps
    end
  end
end
