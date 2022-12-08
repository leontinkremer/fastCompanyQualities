// built-in modules
import React from "react";
import ReactDOM from "react-dom";

// third-party modules
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//index.js
import logger from "./app/services/log.service";

// custom modules
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// components
import App from "./app/App";

logger.init();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
