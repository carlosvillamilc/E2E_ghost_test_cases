Feature: Hacer Login en Ghost y enviar invitación

@user1 @web

Scenario: Como primer usuario inicio sesion
    Given I navigate to page "http://localhost:2369/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 2 seconds
    And I click Staff
    And I click Invite people
    And I wait for 3 seconds
    And I enter invited email
    And I click button invited
    And I wait for 2 seconds
    And I click close popup Invite a New User
    And I wait for 2 seconds
    And I close session
    And I wait for 3 seconds
    And I click option Sign Out

