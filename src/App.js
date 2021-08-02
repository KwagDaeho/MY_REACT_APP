import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content.js";
import Subject from "./components/Subject.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="REACT" sub="Hello. This is REACT APP!!" />
        <Content title="HTML" desc="" />
      </div>
    );
  }
}
export default App;
