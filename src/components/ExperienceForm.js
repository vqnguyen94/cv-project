import React, { Component } from "react";
import "../styles/styles.css";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.submit}>
        <label htmlFor="expName">Enter company name</label>
        <input
          type="text"
          id="expName"
          onChange={this.props.change}
          value={this.props.name}
        />
        <label htmlFor="expTitle">Enter position title</label>
        <input
          type="text"
          id="expTitle"
          onChange={this.props.change}
          value={this.props.title}
        />
        <label htmlFor="expDate">Enter date of employment</label>
        <input
          type="text"
          id="expDate"
          onChange={this.props.change}
          value={this.props.date}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ExperienceForm;
