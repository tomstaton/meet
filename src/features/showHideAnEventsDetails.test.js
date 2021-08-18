import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("When the page is rendered events are collapsed by default", ({
    given,
    when,
    then,
  }) => {
    given("user hasn’t expanded any details", () => {});

    let AppWrapper;
    when("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    then(
      "the user should see a list of events without the details displayed",
      () => {
        expect(AppWrapper.find(".EventDetails")).toHaveLength(0);
      }
    );
  });

  test("User can expand an events details page", ({ given, when, then }) => {
    given("the events details are collapsed", () => {});

    when("the user clicks the expand button", () => {});

    then("the user should be shown an expanded details page", () => {});
  });

  test("User can collapse an events details page", ({ given, when, then }) => {
    given("the events details page was expanded", () => {});

    when("the user clicks the collapse button", () => {});

    then("the events details should collapse", () => {});
  });
});
