Feature: Tomar un post publicado y hacer unpublish

@user1 @web

Scenario: unpublish a post

    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    When I enter password "<PASSWORD1>"
    And I wait for 2 seconds

    And I click Published posts
    And I wait for 2 seconds
    And I click the first published post
    And I wait for 2 seconds
    And I click update post
    And I wait for 2 seconds
    And I click unpublish option

    And I close session
    And I wait for 3 seconds
    And I click option Sign Out
