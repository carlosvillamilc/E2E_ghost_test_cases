Feature: Hacer Login en Ghost y revocar invitación

@user1 @web

Scenario: Como usuario inicio sesion para revocar invitación en Ghost V4
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME2>"
    And I wait for 2 seconds
    When I enter password Ghost V4 "<PASSWORD1>"
    And I click Sign In Ghost V4
    And I wait for 5 seconds
    When I click option configuration ghost V4
    And I wait for 2 seconds
    When I click in option Staff Ghost V4
    And I wait for 2 seconds
    When I click Revoke
    And I wait for 2 seconds
    Then I see the message revoked Invited Ghost V4
    And I wait for 1 seconds
    And I close session ghost V4
    And I click option Sign Out Ghost V4
    And I wait for 3 seconds