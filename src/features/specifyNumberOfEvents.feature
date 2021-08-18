Feature: Specify number of events

Scenario: When user has not specified a number of events, 32 is the default number
Given the user has not changed the number of items in the list
When the user opens the app
Then the user should see a list of 32 events

Scenario: User can change the number of events they want to see
Given the main page is open
When the user specifies a number of events
Then the user should be shown that number of events
