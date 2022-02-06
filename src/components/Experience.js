import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="edit" id="exp" onClick={this.props.edit}>
        <h2>EXPERIENCE</h2>
        <h3>{this.props.name}</h3>
        <h4>{this.props.title}</h4>
        <h4>{this.props.date}</h4>
      </div>
    );
  }
}

export default Experience;
