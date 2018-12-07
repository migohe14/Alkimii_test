class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :role
      t.string :departament
      t.integer :salary

      t.timestamps
    end
  end
end
