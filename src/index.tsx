import React from "react";
import ReactDOM from "react-dom/client";
import Tabs from "./components/tabs/Tabs";
import "./index.css";

const tabConfigs = [
  { label: "Emails", badgeLabel: "", badgeVariant: undefined, variant: "pill" },
  {
    label: "Files",
    badgeLabel: "Status",
    badgeVariant: "neutral",
    variant: "pill",
  },
  {
    label: "Edits",
    badgeLabel: "Warning",
    badgeVariant: "negative",
    variant: "pill",
  },
  { label: "Dashboard", badgeLabel: "", badgeVariant: null, variant: "pill" },
  { label: "Messages", badgeLabel: "", badgeVariant: null, variant: "pill" },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <main>
      <h1 className="visually-hidden">
        Design System Frontend Technical Prima IT
      </h1>
      <Tabs tabConfigs={tabConfigs} />
    </main>
  </React.StrictMode>,
);
