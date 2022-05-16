Feature: Hacer Login en Ghost y revocar invitación

@user1 @web

Scenario: Scenario8 V3
    Given I navigate to page "http://localhost:2369/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 2 seconds
    And I click Staff
    And I click Revoke
    And I wait for 2 seconds
    Then I see the message revoked Invited "Invitation revoked"
    And I close session
    And I wait for 3 seconds
    And I click option Sign Out