class WebsiteController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def form
    @project = Project.new
  end

  
end
