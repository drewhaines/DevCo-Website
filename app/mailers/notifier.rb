class Notifier < ActionMailer::Base
  default from: "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifier.project_recieved.subject
  #
  def project_recieved(project)
    @project = project

    mail :to => project.email, :subject=>"DevCo Confirmation Email"
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifier.project_info.subject
  #
  def project_info_Drew(project)
    @full_name = project.full_name
	@email = project.email
	@phone = project.phone
	@description = project.description
	

    mail to: "Drew.dmDevCo@gmail.com", :subject=>"You have a New Project Proposal"
  end
  
  
  
  def project_info_Matt(project)
    @full_name = project.full_name
	@email = project.email
	@phone = project.phone
	@description = project.description
	

    mail to: "Matt.dmDevCo@gmail.com", :subject=>"You have a New Project Proposal"
  end
end
