class AddTitleToEntry < ActiveRecord::Migration[5.1]
  def change
    add_column :entries, :title, :string
  end
end
