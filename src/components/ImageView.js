import React from "react";
import { useParams } from "react-router-dom";
import { IMAGES } from "./../constants/constants";
import Image from "./Image";

function ImageView() {
  const { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];
  if (!image) return <div>Image not found!</div>;
  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
}

export default ImageView;
