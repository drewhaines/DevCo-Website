class Project < ActiveRecord::Base
validates :full_name, :email, :phone, :presence => true
end
