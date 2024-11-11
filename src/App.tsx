import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/themeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { getTheme, light, ThemeName } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider } from "./context/themeContext";

function App() {

  return (
  <BookStoreThemeProvider>

      <ThemeSwitcher />
      <Layout>
        <Home />
      </Layout>
  </BookStoreThemeProvider>
  );
}

export default App;
