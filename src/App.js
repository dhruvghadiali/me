import { routeName } from "@MEUtils/routeName";
import { BrowserRouter, Routes, Route,  } from "react-router";

import HomeScreen from "@MEScreens/home/homeScreen";
import SignInScreen from "@MEScreens/signIn/signInScreen";
import SignUpScreen from "@MEScreens/signUp/signUpScreen";
import DashboardScreen from "@MEScreens/dashboard/dashboardScreen";
import SchoolScreen from "@MEScreens/school/schoolScreen";
import ForgottenPasswordScreen from "@MEScreens/forgottenPassword/forgottenPasswordScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeName.root} element={<HomeScreen />} />
        <Route path={routeName.signIn} element={<SignInScreen />} />
        <Route path={routeName.signUp} element={<SignUpScreen />} />
        <Route path={routeName.forgottenPassword} element={<ForgottenPasswordScreen />} />
        <Route path={routeName.dashboard} element={<DashboardScreen />} />
        <Route path={routeName.school} element={<SchoolScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
