import React, { Component } from "react";

class Controls extends Component {
  render() {
    console.log("Controls Render.");
    return (
      <h2>
        <ol>
          <li>
            <button
              className="btn_create"
              onClick={function (e) {
                this.props.onChangeMode("createMode");
              }.bind(this)}
            >
              create
            </button>
          </li>
          <li>
            <button
              className="btn_update"
              onClick={function (e) {
                this.props.onChangeMode("updateMode");
              }.bind(this)}
            >
              update
            </button>
          </li>
          <li>
            <button
              className="btn_delete"
              onClick={function (e) {
                this.props.onChangeMode("deleteMode");
              }.bind(this)}
            >
              delete
            </button>
          </li>
        </ol>
      </h2>
    );
  }
}

export default Controls;
