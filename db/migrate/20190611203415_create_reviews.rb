class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body
      t.string :author
      t.belongs_to :product, foreign_key: true

      t.timestamps
    end
  end
end
