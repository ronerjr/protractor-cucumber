Feature: Search
  As a developer using Angular
  I need to look-up classes and guidelines
  So that I can concentrate on building awesome applications

  Scenario Outline: Saving a form filled with valid data
    Given I am on the form
    When I set my team <team>
    And I set my activity <activity>
    And I set my start date <startDate>
    And I set my end date <endDate>
    And I set my status <status>
    Then I click on save button and go to the next page

    Examples:
      | team     | activity              | startDate    | endDate      | status |
      | "Team 1" | "doing something"     | "08/02/2018" | "09/02/2018" | Green  |
      | "Team 2" | "another thing"       | "08/03/2018" | "09/03/2018" | Yellow |
      | "Team 3" | "some activity"       | "08/04/2018" | "09/04/2018" | Red    |
      | "Team 4" | "finally ending here" | "08/05/2018" | "09/05/2018" | Green  |
