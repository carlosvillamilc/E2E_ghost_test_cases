@crearPostBuscarlo
Feature: Login - Cuenta - Cambiar nombre - Save - Logout

@user1 @web

Scenario: Scenario10 V4
    Given I navigate to page "http://localhost:3002/ghost/"
    And I wait for 3 seconds
    When I enter email V4 "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password V4 "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In V4
    And I wait for 1 seconds

    And I click on Posts
    And I wait for 1 seconds
    And I click on New Post
    And I wait for 1 seconds
    And I enter post title "<POSTTITLE>"
    And I wait for 1 seconds
    And I click on Publish
    And I wait for 1 seconds
    And I click on Publish confirm v4
    And I wait for 1 seconds
    And I click on Posts
    And I wait for 1 seconds
    And I click on search option
    And I wait for 1 seconds
    And I search post title "<POSTTITLE>" v4    
    
    And I wait for 1 seconds
    And I click on Posts
    And I wait for 1 seconds
    And I click on profile
    And I wait for 1 seconds
    And I click option Sign Out Ghost V4
