Feature: Hacer un Post en Ghost

@user1 @web

Scenario: Como primer usuario inicio sesion
    Given I navigate to page "http://localhost:2369/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME1>"
 
    When I enter password "<PASSWORD1>"
   
    And I click Sign In
    
    And I click Post
    And I wait for 2 seconds
    And I click on Drafts
    And I wait for 2 seconds
    And I enter to first draft
    And I enter entre post title "<POSTTITLE>"
    And I wait for 2 seconds
    And I click on Publish button
    And I click on Publish option
    And I close session
    And I wait for 3 seconds
    And I click option Sign Out