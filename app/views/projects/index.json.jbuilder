json.array!(@projects) do |project|
  json.extract! project, :id, :full_name, :email, :phone, :description
  json.url project_url(project, format: :json)
end
