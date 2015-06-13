set :port, 22
set :user, 'root'
set :deploy_via, :remote_cache
set :use_sudo, false

server 'dmdevco.com',
       roles: [:web, :app, :db],
       port: fetch(:port),
       user: fetch(:user),
       primary: true

set :deploy_to, "/home/rails"

set :ssh_options, {
                    forward_agent: true,
                    auth_methods: %w(publickey),
                    user: 'root'
                }

set :branch, "master"
set :rails_env, :production
set :conditionally_migrate, true


after 'deploy:publishing', 'deploy:restart'

namespace :deploy do
  task :restart do
    on roles(:all) do
      execute(:sudo, :service, :unicorn, :restart)
    end
  end
end