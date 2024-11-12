import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import {GlobalStyle} from "./style/global";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import {BookStoreThemeProvider, ThemeContext} from "./context/themeContext";

function App() {

  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      <Layout>
        <Home/>
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
