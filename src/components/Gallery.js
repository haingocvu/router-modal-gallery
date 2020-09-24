import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "./../constants/constants";
import Thumbnail from "./Thumbnail";

function Gallery() {
  let location = useLocation();
  return (
    <div>
      {IMAGES.map((i) => (
        <Link
          key={i.id}
          to={{ pathname: `/img/${i.id}`, state: { background: location } }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
