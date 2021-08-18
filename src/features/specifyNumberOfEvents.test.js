import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import EventList from "../EventList";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user has not specified a number of events, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("the user has not changed the number of items in the list", () => {
      EventListWrapper = shallow(<EventList updateEvents={() => {}} />);
    });

    let EventListWrapper;
    when("the user opens the app", () => {
      EventListWrapper = mount(<App />);
    });

    then("the user should see a list of 32 events", () => {
      EventListWrapper.update();
      expect(EventListWrapper.find(".EventsNumber")).toHaveLength(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("the main page is open", () => {});

    let AppWrapper;
    when("the user specifies a number of events", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".EventsNumber")).toHaveLength();
    });

    then("the user should be shown that number of events", () => {});
  });
});
