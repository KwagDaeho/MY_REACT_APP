import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    return (
      <div className="main_content">
        <h1>[ MAIN CONTENT ]</h1>
        <h1>{this.props.title}</h1>
        <h2>{this.props.desc}</h2>
        Main content here....
        <a href="1.html">DON'T CLICK THIS!</a>
      </div>
    );
  }
}

export default ReadContent;
