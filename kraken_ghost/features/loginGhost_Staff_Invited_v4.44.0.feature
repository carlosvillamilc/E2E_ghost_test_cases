Feature: Hacer Login en Ghost e ingresar a Staff a invitar personas

@user1 @web

Scenario: Scenario7 V4
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password Ghost V4 "<PASSWORD1>"
    And I click Sign In Ghost V4
    And I wait for 5 seconds
    When I click option configuration ghost V4
    And I wait for 2 seconds
    When I click in option Staff Ghost V4
    And I wait for 2 seconds
    When I click Invite people
    And I wait for 2 seconds
    When I enter invited email Ghost V4
    And I wait for 2 seconds
    When I click on button Send invited Ghost V4
    And I wait for 2 seconds
    And I click close popup Invite a New User
    And I wait for 2 seconds
    When I click option configuration ghost V4
    And I click in option Staff Ghost V4
    And I wait for 2 seconds
    Then I can see the invited users
    And I wait for 1 seconds
    And I close session ghost V4
    And I click option Sign Out Ghost V4
    And I wait for 3 seconds
