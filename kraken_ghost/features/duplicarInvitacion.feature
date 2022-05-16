Feature: Hacer Login en Ghost

@user1 @web

Scenario: Login Staff EnviarInvite EnviateInvite Validar Logout
    Given I navigate to page "http://localhost:3001/ghost/"
    And I wait for 3 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 1 seconds
    
    And I click Staff
    And I wait for 1 seconds
    And I click Invite people
    And I wait for 1 seconds
    And I enter invited email
    And I wait for 1 seconds
    And I click button invited
    And I wait for 1 seconds
    And I click close popup Invite a New User
    And I wait for 2 seconds
    And I click Invite people
    And I wait for 2 seconds
    And I enter invited email
    And I wait for 2 seconds
    And I click button invited
    And I wait for 5 seconds
    And I check error
    And I wait for 2 seconds
    And I click close popup Invite a New User
    
    And I wait for 5 seconds
    And I click on profile
    And I wait for 1 seconds
    And I click Sign Out