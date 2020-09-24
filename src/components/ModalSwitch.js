import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Gallery from "./Gallery";
import Home from "./Home";
import ImageView from "./ImageView";
import Modal from "./Modal";

function ModalSwitch() {
  const location = useLocation();
  let background = location.state && location.state.background;
  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch>
      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}

export default ModalSwitch;
