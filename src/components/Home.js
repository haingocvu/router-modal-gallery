import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/gallery">Visit the gallery</Link>
      <h2>Feature Images</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/2">Crimson</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
