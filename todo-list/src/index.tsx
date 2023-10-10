import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppComponent } from "./Pages/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppComponent title="hello" />
  </React.StrictMode>
);
