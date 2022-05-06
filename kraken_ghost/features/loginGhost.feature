Feature: Hacer Login en Ghost

@user1 @web

Scenario: Como primer usuario inicio sesion
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 5 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 7 seconds