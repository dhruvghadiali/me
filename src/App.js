import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";

import { root, theme } from "@MEUtils/routeName";
import HomePage from "./pages/HomePage";
import ThemePage from "./pages/ThemePage";

function App() {
  const isDevelopment = import.meta.env.DEV;

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path={root} element={<HomePage />} />
          {isDevelopment && <Route path={theme} element={<ThemePage />} />}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
