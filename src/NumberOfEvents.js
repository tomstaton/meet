import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 24,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 34) {
      return this.setState({
        infoText: "Must Enter a valid number of events, 1 - 34",
        numberOfEvents: "",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: "",
      });
      this.props.updateEvents(null, event.target.value);
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.infoText} />
        <form>
          <label> # of Events:</label>
          <input
            type="number"
            className="EventsNumber"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </form>
      </div>
    );
  }
}
export default NumberOfEvents;
