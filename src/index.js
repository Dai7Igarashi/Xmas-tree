import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Xmas from "./Xmas";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Xmas />, document.getElementById("root"));
serviceWorker.unregister();
