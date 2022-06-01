import "./App.css";

import * as React from "react";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { RouteComponent } from "./routes";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    // type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
