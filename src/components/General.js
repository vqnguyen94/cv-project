import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="edit" id="general" onClick={this.props.edit}>
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
        <h2>{this.props.phone}</h2>
      </div>
    );
  }
}

export default General;
