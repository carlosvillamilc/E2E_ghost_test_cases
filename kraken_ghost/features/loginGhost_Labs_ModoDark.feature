Feature: Hacer Login en Ghost y cambiar apariencia de ghost

@user1 @web

Scenario: Scenario6 V3
    Given I navigate to page "http://localhost:3001/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    When I enter password "<PASSWORD1>"
    And I click Sign In
    And I wait for 2 seconds
    And I click Labs
    And I click change Night shift
    And I close session
    And I wait for 2 seconds
    And I click option Sign Out
    And I wait for 3 seconds