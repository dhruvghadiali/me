import { routeName } from "@MEUtils/routeName";
import { BrowserRouter, Routes, Route,  } from "react-router";

import HomeScreen from "@MEScreens/home/homeScreen";
import SignInScreen from "@MEScreens/signIn/signInScreen";
import SignUpScreen from "@MEScreens/signUp/signUpScreen";
import ForgottenPasswordScreen from "@MEScreens/forgottenPassword/forgottenPasswordScreen";
import DashboardScreen from "@MEScreens/dashboard/dashboardScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeName.root} element={<HomeScreen />} />
        <Route path={routeName.signIn} element={<SignInScreen />} />
        <Route path={routeName.signUp} element={<SignUpScreen />} />
        <Route path={routeName.forgottenPassword} element={<ForgottenPasswordScreen />} />
        <Route path={routeName.dashboard} element={<DashboardScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
