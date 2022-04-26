import React from "react";

class ImageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  funcIshla = (event) => {
    event.preventDefault();
    this.props.getData(event);
    console.log("hello");
  };

  render() {
    return (
      <div className="containerCard">
        <div className="card">
          <img src="" alt=""/>
        </div>
      </div>
    );
  }
}

export default ImageList;
