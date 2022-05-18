Feature: Hacer Login en Ghost y reenviar invitación

@user1 @web

Scenario: Como primer usuario inicio sesion y desde staff reenvio invitación
    Given I navigate to page "http://localhost:3001/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 2 seconds
    And I click Staff
    And I click Resend
    And I wait for 3 seconds
    Then I see the message resend Invited
    And I wait for 1 seconds
    And I close session
    And I wait for 3 seconds
    And I click option Sign Out