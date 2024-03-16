import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import "./styles.css";

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-dbofanjigstk56gw.us.auth0.com"
    clientId="PphmQ7Yjc0zOwb0YK4rSUnJQhyVrTm89"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <StrictMode>
    <App />
    </StrictMode>
  </Auth0Provider>,
);