import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  root,
  theme,
  signIn,
  signUp,
  school,
  dashboard,
  admissionForm,
  forgottenPassword,
  profile,
} from "@MEPageRoutes";
import { ThemeProvider } from "@MEContexts/themeProvider";

import HomePage from "@MEPages/homePage";
import ThemePage from "@MEPages/ThemePage";
import SchoolPage from "@MEPages/schoolPage";
import SignUpPage from "@MEPages/signUpPage";
import SignInPage from "@MEPages/signInPage";
import ProfilePage from "@MEPages/profilePage";
import DashboardPage from "@MEPages/dashboard";
import NotFoundPage from "@MEPages/NotFoundPage";
import AdmissionFormPage from "@MEPages/admissionFormPage";
import PublicRoute from "@MECommonComponents/hoc/publicRoute";
import AuthChecker from "@MECommonComponents//hoc/authChecker";
import ForgottenPasswordPage from "@MEPages/forgottenPasswordPage";
import ProtectedRoute from "@MECommonComponents/hoc/protectedRoute";

import MESidebar from "@MECommonComponents/sidebar/meSidebar";

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
                <PublicRoute
                  redirectAuthenticated={true}
                  redirectTo={dashboard}
                >
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path={school}
              element={
                <PublicRoute>
                  <SchoolPage />
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
                  <SignInPage />
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
                  <SignUpPage />
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
                  <ForgottenPasswordPage />
                </PublicRoute>
              }
            />
            <Route
              path={dashboard}
              element={
                <ProtectedRoute>
                  <MESidebar>
                    <DashboardPage />
                  </MESidebar>
                </ProtectedRoute>
              }
            />
            <Route
              path={admissionForm}
              element={
                <ProtectedRoute>
                  <MESidebar>
                    <AdmissionFormPage />
                  </MESidebar>
                </ProtectedRoute>
              }
            />
            <Route
              path={profile}
              element={
                <ProtectedRoute>
                  <MESidebar>
                    <ProfilePage />
                  </MESidebar>
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
