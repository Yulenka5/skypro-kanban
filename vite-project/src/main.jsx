import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext.jsx";
import { CardsProvider } from "./context/cardsContext.jsx";
import "react-day-picker/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <CardsProvider>
          <App />
        </CardsProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
