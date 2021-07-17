FEAT 2.
As a [user]
I should be able to [show/hide an event's details]
So that I can [see the details of an event happening in a city]
--Given the user is viewing a collapsed event element
--When the user selects an event
--Then the user should see an expanded view of the event's details that they can then collapse

FEAT 3.
As a [user]
I should be able to [specify the number of events]
So that I can [see a varrying number of events]
--Given the user is viewing a list of events
--When the hasn't specified the number of events, the default is 32
--Then the user should be able to change the number of visible events

FEAT 4.
As a [user]
I should be able to [use the app when offline]
So that I can [use the app with certain cached parameters]
--Given the user is using the app offline
--When the user attempts to change the settings
--Then the user will be shown an error 

FEAT 5.
As a [user]
I should be able to [utilize visual data]
So that I can [see events upcoming in each city]
--Given the user wants to view visual data from a city
--When the user selects the data visiualization option
--Then the user will be able to access a chart showing the number of upcoming events in the city
