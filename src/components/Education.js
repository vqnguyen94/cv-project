import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="edit" id="edu" onClick={this.props.edit}>
        <h2>EDUCATION</h2>
        <h3>{this.props.name}</h3>
        <h4>{this.props.major}</h4>
        <h4>{this.props.date}</h4>
      </div>
    );
  }
}

export default Education;
