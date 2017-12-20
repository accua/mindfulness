class CreateFeelings < ActiveRecord::Migration[5.1]
  def change
    create_table :feelings do |t|
      t.references :entry, foreign_key: true
      t.integer :before_or_after
      t.integer :rating
      t.text :textbox

      t.timestamps
    end
  end
end
