# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'devco'
set :use_sudo, false
set :bundle_binstubs, nil
set :linked_files, %w{config/database.yml}

set :stages, %w(production staging)
set :default_stage, "production"

# Default value for :scm is :git
set :scm, :git
set :repo_url, 'git@github.com:drewhaines/DevCo-Website.git'

set :linked_files, fetch(:linked_files, []).push('config/database.yml')
set :linked_dirs, fetch(:linked_dirs).push("log", "tmp/pids","tmp/cache", "tmp/sockets", "vendor/bundle", "public/system")


