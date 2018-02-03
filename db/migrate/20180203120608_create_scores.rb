class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.name :string
      t.integer :score

      t.timestamps
    end
  end
end
