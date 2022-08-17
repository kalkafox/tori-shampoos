import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./index.css";
import Main from "./Main";

const rootDom = document.getElementById("root");

const root = ReactDOM.createRoot(rootDom);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
