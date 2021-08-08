import React, { Component } from "react";
import "./App.css";
import ReadContent from "./components/ReadContent.js";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject.js";
import List from "./components/List";
import Kwag from "./daeho.js";
import Controls from "./components/Controls";

class App extends Component {
  constructor(props) {
    super(props);
    this.all_content_number = 3;
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
  getContent() {
    var _title = null;
    var _desc = null;
    var _id = null;
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
            // this.state.contents.push({
            //   id: this.all_content_number,
            //   title: _title,
            //   desc: _desc,
            // }); 이 방법은 state 데이터의 원본을 훼손시키므로 push가 아닌 concat을 사용하자.
            // immutable의 중요성을 생각해라. 불-변-
            this.all_content_number = this.all_content_number + 1;
            var created_content = this.state.contents.concat({
              id: this.all_content_number,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: created_content,
            });
            console.log(_title, _desc);
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "updateMode") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_id) {
          _title = data.title;
          _desc = data.desc;
          _id = data.id;
          break;
        }
        i = i + 1;
      }
      _mainContent = (
        <UpdateContent
          id={_id}
          title={_title}
          desc={_desc}
          onSubmit={function (_id, _title, _desc) {
            var updated_content = Array.from(this.state.contents);
            var j = 0;
            while (j < updated_content.length) {
              if (updated_content[j].id === _id) {
                updated_content[j] = { id: _id, title: _title, desc: _desc };
                break;
              }
              j = j + 1;
            }

            this.setState({
              contents: updated_content,
            });
            console.log(_title, _desc);
          }.bind(this)}
        />
      );
    }
    return _mainContent;
  }

  render() {
    console.log("App Render.");

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            if (this.state.mode !== "home") {
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
        {this.getContent()};
        <Kwag />
        {console.log("===========================")}
      </div>
    );
  }
}
export default App;
