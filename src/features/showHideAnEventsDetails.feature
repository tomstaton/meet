Feature: Show/Hide an Events Details

Scenario: When the page is rendered events are collapsed by default
Given user hasn’t expanded any details
When the user opens the app
Then the user should see a list of events without the details displayed

Scenario: User can expand an events details page
Given the events details are collapsed
When the user clicks the expand button
Then the user should be shown an expanded details page

Scenario: User can collapse an events details page 
Given the events details page was expanded
When the user clicks the collapse button
Then the events details should collapse
