import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Contacts/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persist } from "./redux/stores/index";
import { HelmetProvider } from "react-helmet-async";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
