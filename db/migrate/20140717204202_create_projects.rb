class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :full_name
      t.string :email
      t.string :phone
      t.text :description

      t.timestamps
    end
  end
end
