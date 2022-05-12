Feature: Hacer Login en Ghost y activar members

@user1 @web

Scenario: Como primer usuario inicio sesion y desde Labs activo la opción Members
    Given I navigate to page "http://localhost:2369/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 5 seconds
    And I click option Design for label
    And I wait for 5 seconds
    And I click on the image
    And I wait for 5 seconds
    And I close session
    And I wait for 3 seconds
    And I click option Sign Out