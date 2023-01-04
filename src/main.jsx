import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router> */}
      {/* <ProSidebarProvider> */}
        <App />
      {/* </ProSidebarProvider> */}
    {/* </Router> */}
  </React.StrictMode>
);
