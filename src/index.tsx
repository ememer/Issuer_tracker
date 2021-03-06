import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { PersonContextProvider } from "./context/PersonsContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import reportWebVitals from "./reportWebVitals";
import Issues from "./routes/Issues";
import Settings from "./routes/Settings";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <PersonContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/issues" element={<Issues />} />
            </Routes>
          </BrowserRouter>
        </PersonContextProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
