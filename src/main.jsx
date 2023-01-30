import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "normalize.css";
import store from "./store";
import "./main.css";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={responsiveFontSizes(createTheme(theme))}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
