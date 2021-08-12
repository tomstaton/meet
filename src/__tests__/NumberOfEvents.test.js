import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
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
    const targetObject = { target: { value: 15 } };

    NumberOfEventsWrapper.find(".EventsNumber").simulate(
      "change",
      targetObject
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(15);
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".EventsNumber").prop("value")).toBe(
      numberOfEvents
    );
  });

  test("change state when input changes", () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find(".EventsNumber").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  test("show number of events input label", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
  });
});
