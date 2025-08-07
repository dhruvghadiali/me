import { 
  root, 
  theme, 
  school, 
  signIn, 
  signUp, 
  dashboard, 
  forgottenPassword 
} from "@MEPageRoutes";

// Import your page components
import HomePage from "../../pages/HomePage";
import ThemePage from "../../pages/ThemePage";
// import SchoolPage from "../../pages/SchoolPage";
// import DashboardPage from "../../pages/DashboardPage";
// import SignInPage from "../../pages/SignInPage";
// import SignUpPage from "../../pages/SignUpPage";
// import ForgottenPasswordPage from "../../pages/ForgottenPasswordPage";

// Public routes (accessible to everyone)
export const publicRoutes = [
  {
    path: root,
    element: HomePage,
    exact: true
  },
  {
    path: school,
    // element: SchoolPage,
    element: HomePage, // Temporary until you create SchoolPage
    exact: true
  }
];

// Auth routes (redirect authenticated users to dashboard)
export const authRoutes = [
  {
    path: signIn,
    // element: SignInPage,
    element: HomePage, // Temporary until you create SignInPage
    exact: true
  },
  {
    path: signUp,
    // element: SignUpPage,
    element: HomePage, // Temporary until you create SignUpPage
    exact: true
  },
  {
    path: forgottenPassword,
    // element: ForgottenPasswordPage,
    element: HomePage, // Temporary until you create ForgottenPasswordPage
    exact: true
  }
];

// Protected routes (require authentication)
export const protectedRoutes = [
  {
    path: dashboard,
    // element: DashboardPage,
    element: HomePage, // Temporary until you create DashboardPage
    exact: true
  }
];

// Development routes (only available in development)
export const devRoutes = [
  {
    path: theme,
    element: ThemePage,
    exact: true
  }
];
