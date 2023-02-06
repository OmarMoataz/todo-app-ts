import { ThemeProvider } from "styled-components";

// @ts-ignore
import theme from "@/utils/theme.js";

import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
