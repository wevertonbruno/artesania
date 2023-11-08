import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import Globalstyle from "./globalstyle";
import { ThemeContext } from "./context/ThemeContext";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import ToastProvider from "./context/ToastContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ToastProvider>
        <Globalstyle />
        <Sidebar />
        <Outlet />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
