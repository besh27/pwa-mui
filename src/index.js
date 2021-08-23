import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/styles";
import { theme } from "./theme/appTheme.js";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  rootElement
);
