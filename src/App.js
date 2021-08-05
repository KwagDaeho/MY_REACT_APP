import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content.js";
import Subject from "./components/Subject.js";
import ETC from "./components/ETC";
import Kwag from "./daeho.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "home",
      welcome: {
        title: "Welcome. i am Haraho :)",
        desc: "Hello! REACT! This is HOME",
      },
      subject: { title: "REACT", sub: "Hello. This is REACT APP!!" },
      contents: [
        { id: 1, title: "HTML_1", desc: "this is part1.. props is read-only." },
        {
          id: 2,
          title: "HTML_2",
          desc: "this is part2.. state can change by using setState.",
        },
        { id: 3, title: "HTML_3", desc: "this is description part3..." },
      ],
    };
  }
  render() {
    var _title = null;
    var _desc = null;
    if (this.state.mode === "home") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            if (this.state.mode === "home") {
              this.setState({
                mode: "read",
              });
            } else {
              this.setState({
                mode: "home",
              });
            }
          }.bind(this)}
        />

        {/* <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                if (this.state.mode === "home") {
                  this.setState({
                    mode: "read",
                  });
                } else {
                  this.setState({
                    mode: "home",
                  });
                }
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          <h2>{this.state.subject.sub}</h2>
        </header>
         */}
        <ETC
          clickFunction={function () {
            alert("You clicked ETC part!");
          }}
          data={this.state.contents}
        />
        <Content title={_title} desc={_desc} />
        <Kwag />
      </div>
    );
  }
}
export default App;
