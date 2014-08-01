class UploadFileToProject < ActiveRecord::Migration
  def change
	add_column :projects, :attachment_file_name, :string
	add_column :projects, :attachment_content_type, :string
	add_column :projects, :attachment_file_size, :integer
	add_column :projects, :attachment_updated_at, :datetime
  end
end
