Feature: Hacer Login en Ghost e ingresar a Staff a invitar personas

@user1 @web

Scenario: Como usuario inicio sesion y envío la invitación a un usuario en Ghost V3
    Given I navigate to page "http://localhost:2369/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click Sign In
    And I wait for 2 seconds
    And I click Staff
    And I click Invite people
    And I wait for 3 seconds
    And I enter invited email
    And I click button invited
    And I wait for 2 seconds
    And I click close popup Invite a New User
    And I wait for 2 seconds
    And I close session ghost V4
    And I wait for 3 seconds
    And I click option Sign Out