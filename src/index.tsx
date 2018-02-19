import * as firebase from "firebase";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Playground from "./components/Playground";

import "./styles/app.scss";

ReactDOM.render(
  <div>
    <Header />
    <Grid />
    <Playground />
    </div>,
  document.getElementById("app"),
);
