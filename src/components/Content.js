import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        Main contents here.
        <a href="1.html">linked!</a>
      </div>
    );
  }
}

export default Content;
