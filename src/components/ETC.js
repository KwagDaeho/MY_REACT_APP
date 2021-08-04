import React, { Component } from "react";

class ETC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <p key={data[i].id}>
          {data[i].id}(이)랑 {data[i].title} (이)라는 값이 나왔당께롱.{" "}
          {data[i].desc} 요것도 같이 나왔당께롱.
        </p>
      );
      i = i + 1;
    }

    return (
      <div
        onClick={function () {
          this.props.clickFunction();
        }.bind(this)}
      >
        {lists}
      </div>
    );
  }
}

export default ETC;
