import React, { Component } from "react";

class List extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdata!!");
    if (newProps.data !== this.props.data) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("List render.");
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <p
          data-id={
            data[i].id
          } /* data- >> dataset 이라는 특수한 것을 통해 접근할 수 있다. */
          key={data[i].id}
          onClick={function (e) {
            this.props.changeContent(e.target.dataset.id);
          }.bind(this)}
        >
          Content.{data[i].id} || TITLE : {data[i].title}
        </p>
      );
      i = i + 1;
    }

    return <div>{lists}</div>;
  }
}

export default List;
