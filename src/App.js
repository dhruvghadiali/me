import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";

import ProtectedRoute from "./components/common/hoc/protectedRoute";
import PublicRoute from "./components/common/hoc/publicRoute";
import AuthChecker from "./components/common/hoc/authChecker";

// Import page components
import HomePage from "./pages/HomePage";
import ThemePage from "./pages/ThemePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const isDevelopment = import.meta.env.DEV;

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <AuthChecker>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/sign-in"
              element={
                <PublicRoute
                  redirectAuthenticated={true}
                  redirectTo="/dashboard"
                >
                  <div> sign-in </div>
                </PublicRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <PublicRoute
                  redirectAuthenticated={true}
                  redirectTo="/dashboard"
                >
                  <div> sign-up </div>
                </PublicRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <PublicRoute
                  redirectAuthenticated={true}
                  redirectTo="/dashboard"
                >
                  <div> forgot-password </div>
                </PublicRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <div>Dashboard - Protected Area</div>
                </ProtectedRoute>
              }
            />
            {isDevelopment && <Route path="/theme" element={<ThemePage />} />}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthChecker>
      </Router>
    </ThemeProvider>
  );
}

export default App;
