import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.desc}</h2>
        Main content here....
        <a href="1.html">linked!</a>
      </div>
    );
  }
}

export default Content;
