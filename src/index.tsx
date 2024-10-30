import React from "react";
import ReactDOM from "react-dom/client";
import Tabs from "./components/tabs/Tabs";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <main>
      <h1 className="visually-hidden">
        Design System Frontend Technical Prima IT
      </h1>
      <Tabs />
    </main>
  </React.StrictMode>,
);
