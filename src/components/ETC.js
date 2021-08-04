import React, { Component } from "react";

class ETC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <p
          key={data[i].id}
          onClick={function () {
            this.props.clickFunction();
            console.log(data);
          }.bind(this)}
        >
          {data[i].id}(이)랑 {data[i].title} (이)라는 값이 나왔당.{" "}
          {data[i].desc} 요것도 같이 나왔어요.
        </p>
      );
      i = i + 1;
    }

    return <div>{lists}</div>;
  }
}

export default ETC;
