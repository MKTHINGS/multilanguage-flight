import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PlayProvider } from "./contexts/Play";
import { LanguageProvider } from "./translations/LanguageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <PlayProvider>
        <App />
      </PlayProvider>
    </LanguageProvider>
  </React.StrictMode>
);