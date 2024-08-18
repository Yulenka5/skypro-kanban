import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext.jsx";
import { CardsProvider } from "./context/cardsContext.jsx";
import "react-day-picker/dist/style.css";
import {GlobalStyle} from "./Global.Styles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <CardsProvider>
          <GlobalStyle />
          <App />
        </CardsProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
