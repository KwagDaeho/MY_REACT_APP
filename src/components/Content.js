import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        <br />
        {this.props.desc}
        <br />
        Main content here....
        <a href="1.html">linked!</a>
      </div>
    );
  }
}

export default Content;
