require 'test_helper'

class NotifierTest < ActionMailer::TestCase
  test "project_recieved" do
    mail = Notifier.project_recieved
    assert_equal "Project recieved", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

  test "project_info" do
    mail = Notifier.project_info
    assert_equal "Project info", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
