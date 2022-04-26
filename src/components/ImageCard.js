import React from "react";
import "./StyleImage.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { span: 0 };
    this.imageDom = React.createRef();
  }
  setSpan = () => {
    const height = this.imageDom.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ span: spans });
  };
  componentDidMount() {
    this.imageDom.current.addEventListener("load", this.setSpan);
  }
  render() {
    return (
      <img
        ref={this.imageDom}
        key={this.props.data.id}
        style={{ gridRowEnd: `span  ${this.state.span}` }}
        alt={this.props.data.alt_description}
        src={this.props.data.urls.regular}
      />
    );
  }
}
export default ImageCard;
