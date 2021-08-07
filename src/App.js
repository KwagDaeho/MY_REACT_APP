import React, { Component } from "react";
import "./App.css";
import ReadContent from "./components/ReadContent.js";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject.js";
import List from "./components/List";
import Kwag from "./daeho.js";
import Controls from "./components/Controls";

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
      selected_id: 1,
      contents: [
        { id: 1, title: "HTML_1", desc: "this is part1.. props is read-only." },
        {
          id: 2,
          title: "HTML_2",
          desc: "this is part2.. state can change by using setState.",
        },
        {
          id: 3,
          title: "HTML_3",
          desc: "this is description part3.. THINK ABOUT NEW TECH ALWAYS",
        },
      ],
    };
  }
  render() {
    var _title = null;
    var _desc = null;
    var _mainContent = null;
    if (this.state.mode === "home") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _mainContent = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _mainContent = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "createMode") {
      _mainContent = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            console.log(_title, _desc);
          }.bind(this)}
        />
      );
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            if (this.state.mode === "read") {
              alert("GO TO HOME!");
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
        <List
          changeContent={function (id) {
            this.setState({ mode: "read", selected_id: Number(id) });
          }.bind(this)} /* .bind()함수에 대해 더 잘 알아보자... */
          data={this.state.contents}
        />
        <Controls
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        />
        {_mainContent}
        <Kwag />
      </div>
    );
  }
}
export default App;
