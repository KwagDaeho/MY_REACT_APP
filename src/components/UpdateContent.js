import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      desc: this.props.desc,
      id: this.props.id,
    };
  }

  render() {
    console.log("UpdateContent Render.");
    return (
      <div className="main_content">
        <h1>[ MAIN CONTENT ]</h1>
        <h1>Update Mode</h1>
        <form
          action="/update_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
            alert("You updated content.");
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="update_title"
              placeholder="title here"
              value={this.state.title}
              onChange={function (e) {
                this.setState({ title: e.target.value });
              }.bind(this)}
            ></input>
          </p>
          <p>
            <textarea
              name="update_desc"
              placeholder="description here"
              value={this.state.desc}
              onChange={function (e) {
                this.setState({ desc: e.target.value });
              }.bind(this)}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </div>
    );
  }
}

export default UpdateContent;
