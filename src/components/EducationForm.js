import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.submit}>
        <label htmlFor="schoolName">Enter school name</label>
        <input
          type="text"
          id="schoolName"
          onChange={this.props.change}
          value={this.props.name}
        />
        <label htmlFor="schoolMajor">Enter major</label>
        <input
          type="text"
          id="schoolMajor"
          onChange={this.props.change}
          value={this.props.major}
        />
        <label htmlFor="schoolDate">Enter date of study</label>
        <input
          type="text"
          id="schoolDate"
          onChange={this.props.change}
          value={this.props.date}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default EducationForm;
