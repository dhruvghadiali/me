import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  root,
  theme,
  signIn,
  signUp,
  dashboard,
  forgottenPassword,
} from "@MEPageRoutes";
import { ThemeProvider } from "@MEContexts/ThemeProvider";

import HomePage from "@MEPages/homePage";
import ThemePage from "@MEPages/ThemePage";
import NotFoundPage from "@MEPages/NotFoundPage";
import PublicRoute from "@MECommonComponents/hoc/publicRoute";
import AuthChecker from "@MECommonComponents//hoc/authChecker";
import ProtectedRoute from "@MECommonComponents/hoc/protectedRoute";

function App() {
  const isDevelopment = import.meta.env.DEV;

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <AuthChecker>
          <Routes>
            <Route
              path={root}
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path={signIn}
              element={
                <PublicRoute
                  redirectAuthenticated={true}
                  redirectTo={dashboard}
                >
                  <div> sign-in </div>
                </PublicRoute>
              }
            />
            <Route
              path={signUp}
              element={
                <PublicRoute
                  redirectAuthenticated={true}
                  redirectTo={dashboard}
                >
                  <div> sign-up </div>
                </PublicRoute>
              }
            />
            <Route
              path={forgottenPassword}
              element={
                <PublicRoute
                  redirectAuthenticated={true}
                  redirectTo={dashboard}
                >
                  <div> forgot-password </div>
                </PublicRoute>
              }
            />
            <Route
              path={dashboard}
              element={
                <ProtectedRoute>
                  <div>Dashboard - Protected Area</div>
                </ProtectedRoute>
              }
            />
            {isDevelopment && <Route path={theme} element={<ThemePage />} />}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthChecker>
      </Router>
    </ThemeProvider>
  );
}

export default App;
