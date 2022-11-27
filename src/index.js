import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { SideBar } from "./components/SIdeBar/SideBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="all">
    <App />
    <SideBar />
  </div>
);
