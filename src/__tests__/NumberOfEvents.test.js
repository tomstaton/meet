import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("textbox element is rendered", () => {
    expect(NumberOfEventsWrapper.find(".EventsNumber")).toHaveLength(1);
  });

  test("show 32 events by default", () => {
    expect(NumberOfEventsWrapper.find(".EventsNumber").prop("value")).toEqual(
      32
    );
  });

  test("change the number of events", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32,
    });
    NumberOfEventsWrapper.find(".EventsNumber").simulate("change", {
      numberOfEvents: 64,
    });
    expect(NumberOfEventsWrapper.find(".NumberofEvents")).toBe(64);
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".EventsNumber").prop("value")).toBe(
      numberOfEvents
    );
  });
});
