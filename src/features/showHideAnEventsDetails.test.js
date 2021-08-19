import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import Event from "../Event";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  let EventListWrapper;
  let EventWrapper;
  test("When the page is rendered events are collapsed by default", ({
    given,
    when,
    then,
  }) => {
    given("user hasn’t expanded any details", () => {});

    when("the user opens the app", () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
    });

    then(
      "the user should see a list of events without the details displayed",
      () => {
        AppWrapper.update();
        expect(EventListWrapper.find("EventDetails")).toHaveLength(0);
      }
    );
  });

  test("User can expand an events details page", ({ given, when, then }) => {
    given("the events details are collapsed", () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when("the user clicks the expand button", () => {
      AppWrapper.update();
      EventWrapper.find(".Event");
      EventWrapper.find(".showMore").simulate("click");
    });

    then("the user should be shown an expanded details page", () => {
      expect(EventWrapper.find(".EventDetails")).toHaveLength(1);
    });
  });

  test("User can collapse an events details page", ({ given, when, then }) => {
    given("the events details page was expanded", () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find(".Event");
      EventWrapper.find(".showMore").simulate("click");
    });

    when("the user clicks the collapse button", () => {
      EventWrapper.find(".Event");
      EventWrapper.find(".showLess").simulate("click");
    });

    then("the events details should collapse", () => {
      expect(EventWrapper.find(".EventDetails")).toHaveLength(0);
    });
  });
});
