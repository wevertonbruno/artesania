import React, { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import Globalstyle from "./globalstyle";
import { ThemeContext } from "./context/ThemeContext";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/index";
import ToastProvider from "./context/ToastContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ToastProvider>
        <Globalstyle />
        <main className="flex bg-zinc-50">
          <Sidebar />
          <Outlet />
        </main>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
