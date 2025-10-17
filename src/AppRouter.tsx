import React from "react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { GasFittingServicesPage } from "./components/GasFittingServicesPage";

export function AppRouter() {
  return <BrowserRouter>
          <App />
      </BrowserRouter>;
}