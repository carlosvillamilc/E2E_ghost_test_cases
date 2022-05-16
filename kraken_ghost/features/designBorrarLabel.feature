Feature: Login - Design - Borrar Label - Save - Logout

@user1 @web

Scenario: Login Design BorrarLabel Save Logout
    Given I navigate to page "http://localhost:3001/ghost/"
    And I wait for 3 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 1 seconds

    And I click on Design
    And I wait for 1 seconds
    And I check Navigation Text
    And I wait for 1 seconds
    
    #And I click on View Site
    #And I wait for 1 seconds
    #And I check Navigation Text on site
    #And I wait for 1 seconds

    And I delete first design navigation item
    And I wait for 1 seconds
    And I click on Save
    And I wait for 1 seconds
    
    And I click on profile
    And I wait for 1 seconds
    And I click Sign Out
