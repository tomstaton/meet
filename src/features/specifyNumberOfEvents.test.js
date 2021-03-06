import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user has not specified a number of events, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("the user has not changed the number of items in the list", () => {});

    let AppWrapper;
    when("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    then("the user should see a list of 32 events", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toBe(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the main page is open", () => {
      AppWrapper = mount(<App />);
    });

    when("the user specifies a number of events", () => {
      AppWrapper.find(".EventsNumber").simulate("change", {
        target: { value: 12 },
      });
    });

    then("the user should be shown that number of events", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toBe(12);
    });
  });
});
