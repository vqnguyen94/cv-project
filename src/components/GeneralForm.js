import React, { Component } from "react";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.submit}>
        <label htmlFor="userName">Enter your name</label>
        <input
          type="text"
          id="userName"
          onChange={this.props.change}
          value={this.props.name}
        />
        <label htmlFor="userEmail">Enter email</label>
        <input
          type="text"
          id="userEmail"
          onChange={this.props.change}
          value={this.props.email}
        />
        <label htmlFor="userPhone">Enter phone number</label>
        <input
          type="text"
          id="userPhone"
          onChange={this.props.change}
          value={this.props.phone}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default GeneralForm;
