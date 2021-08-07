import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <div className="main_content">
        <h1>[ MAIN CONTENT ]</h1>
        <h1>Create</h1>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.create_title.value,
              e.target.create_desc.value
            );
            alert("You created content.");
          }.bind(this)}
        >
          <p>
            <input
              type="text"
              name="create_title"
              placeholder="title here"
            ></input>
          </p>
          <p>
            <textarea
              name="create_desc"
              placeholder="description here"
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

export default CreateContent;
