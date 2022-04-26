import React from "react";
import "./StyleImage.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const imageRender = () => {
    return props.getData.map((val) => {
      return <ImageCard data={val} key={val.id} />;
    });
  };

  return <div className="img__List">{imageRender()}</div>;
};

export default ImageList;
