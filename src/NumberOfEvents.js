import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateEvents(null, event.target.value);
  };

  render() {
    return (
      <div className="numberOfEvents">
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
