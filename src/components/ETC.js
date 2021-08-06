import React, { Component } from "react";

class ETC extends Component {
  render() {
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
          {data[i].id}번 입니다. TITLE은 {data[i].title} 입니다.
          <br />
          클릭해보세요.
        </p>
      );
      i = i + 1;
    }

    return <div>{lists}</div>;
  }
}

export default ETC;
