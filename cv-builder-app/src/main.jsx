import React from "react";
import ReactDOM from "react-dom/client";
import Forms from "./components/Forms.jsx";
import CV from "./components/CV.jsx";
import "./css/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Forms />
    <CV />
  </React.StrictMode>
);
