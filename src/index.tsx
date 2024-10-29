import React from "react";
import ReactDOM from "react-dom/client";
import Tabs from "./components/Tabs"; 
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Tabs/>
  </React.StrictMode>
);
