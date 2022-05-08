Feature: Subscribe - Email - Subscribe - X

@user1 @web

Scenario: Como primer usuario inicio sesion
    Given I navigate to page "http://localhost:2368/"
    And I wait for 2 seconds
    And I click on Suscribe
    And I wait for 1 seconds
    And I enter email to subscribe "<SUSCRIBEEMAIL>"
    And I wait for 5 seconds
    And I check subscribe error
    And I wait for 1 seconds
    And I click on X button
    
    