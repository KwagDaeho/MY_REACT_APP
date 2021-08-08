import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log("Subject Render.");
    return (
      <header>
        <h1
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}
        >
          <span>{this.props.title}</span>
        </h1>
        <h2>{this.props.sub}</h2>
      </header>
    );
  }
}
export default Subject;
