import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}
        >
          {this.props.title}
        </h1>
        <h2>
          {this.props.sub}
          <br /> Think about function "bind(this)".
        </h2>
      </header>
    );
  }
}
export default Subject;
