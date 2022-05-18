Feature: Login - Cuenta - Cambiar nombre - Save - Logout

@user1 @web
Scenario: Scenario9 V4
    Given I navigate to page "http://localhost:3002/ghost/"
    And I wait for 3 seconds
    When I enter email V4 "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password V4 "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In V4
    And I wait for 1 seconds
    And I click on profile
    And I wait for 1 seconds
    And I click on Your Profile
    And I wait for 1 seconds
    And I enter new user name "<NEWNAME>"
    And I wait for 1 seconds
    And I click on Save

    And I wait for 1 seconds
    And I click on profile
    And I wait for 1 seconds
    And I click option Sign Out Ghost V4
