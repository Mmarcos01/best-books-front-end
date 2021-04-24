import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

// Auth0 Quickstart
ReactDOM.render(
  <Auth0Provider
    domain="best-books.us.auth0.com"
    clientId="eZlt9rLo1f1j9kGvPMnzF2PxaGknkckE"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);