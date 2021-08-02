import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content.js";
import Subject from "./components/Subject.js";
import ETC from "./components/ETC";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "REACT", sub: "Hello. This is REACT APP!!" },
      contents: [
        { id: 1, title: "HTML_1", desc: "this is description part1..." },
        { id: 2, title: "HTML_2", desc: "this is description part2..." },
        { id: 3, title: "HTML_3", desc: "this is description part3..." },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        <ETC data={this.state.contents} />
        <Content title="HTML" desc="this is description." />
      </div>
    );
  }
}
export default App;
