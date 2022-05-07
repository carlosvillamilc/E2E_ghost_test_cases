Feature: Login - Cuenta - Cambiar nombre - Save - Logout

@user1 @web

Scenario: Como primer usuario inicio sesion
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 1 seconds

    And I click on Posts
    And I wait for 1 seconds
    And I click on New Post
    And I wait for 1 seconds
    And I enter entre post title "<POSTTITLE>"
    And I wait for 1 seconds
    And I click on Publish
    And I wait for 1 seconds
    And I select Publish option
    And I wait for 1 seconds
    And I search for posts
    And I wait for 1 seconds
    When I search for "<POSTTITLE>"
    And I check results

    And I click on profile
    And I wait for 1 seconds
    And I click on Your Profile
    And I wait for 1 seconds
    And I enter new user name "<NEWNAME>"
    And I wait for 1 seconds
    And I click on Save
    And I wait for 1 seconds
    
    And I click on profile
    And I wait for 1 seconds
    And I click Sign Out
