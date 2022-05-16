Feature: Hacer Login en Ghost y cambiar apariencia de ghost

@user1 @web

Scenario: Scenario6 V4
    Given I navigate to page "http://localhost:3002/ghost/#/signin"
    When I enter email "<USERNAME1>"
    When I enter password Ghost V4 "<PASSWORD1>"
    And I click Sign In Ghost V4
    And I wait for 2 seconds
    And I click change Night shift V4
    And I wait for 1 seconds
    And I close session ghost V4
    And I click option Sign Out Ghost V4
    And I wait for 3 seconds