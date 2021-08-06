import React, { Component } from "react";

class Controls extends Component {
  render() {
    return (
      <h2>
        <ol>
          <li>
            <button className="btn_create">create</button>
          </li>
          <li>
            <button className="btn_update">update</button>
          </li>
          <li>
            <button className="btn_delete">delete</button>
          </li>
        </ol>
      </h2>
    );
  }
}

export default Controls;
