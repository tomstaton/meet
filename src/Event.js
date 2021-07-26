import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const event = this.props.event;
    return (
      <div>
        <ul className="Event">
          <h2 className="EventSummary">{event.summary}</h2>
          <p className="EventLocation">{event.location}</p>
          <p className="EventDate">{event.dateTime}</p>
        </ul>
        {this.state.show === true && (
          <p className="EventDetails">{event.description}</p>
        )}
        {this.state.show === false && (
          <button className="showMore" onClick={() => this.handleClick()}>
            Show details
          </button>
        )}
        {this.state.show === true && (
          <button className="showLess" onClick={() => this.handleClick()}>
            hide details
          </button>
        )}
      </div>
    );
  }
}
export default Event;
