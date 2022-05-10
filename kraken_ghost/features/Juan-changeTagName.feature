Feature: Login - Tags - changeTagName - Save - logout

@user1 @web

Scenario: Cambiar nombre de Tag

    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    I click Sign In

    And I click on Tags
    And I wait for 2 seconds
    And I click the first tag 
    And I wait for 2 seconds
    And I write the new tag name
    And I wait for 2 seconds
    And I click on save tag

    And I close session
    And I wait for 3 seconds
    And I click option Sign Out