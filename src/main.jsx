import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context.jsx";
import { CartProvider } from "./context/cart_context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-7zel80584lh3lkv7.us.auth0.com"
    clientId="KAEUQHo5nKVVtWQj3WNu0pBUbCDApBJT"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <BrowserRouter>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </BrowserRouter>
    </UserProvider>
  </Auth0Provider>
);
