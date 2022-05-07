Feature: Hacer Login en Ghost

@user1 @web

Scenario: Como primer usuario inicio sesion
    Given I navigate to page "http://localhost:2369/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click Staff
    And I click Resend
    And I wait for 2 seconds
    Then I see the message resend Invited "Sending Invite..."
    And I close session
    And I wait for 3 seconds
    And I click option Sign Out