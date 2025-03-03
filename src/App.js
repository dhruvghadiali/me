import { routeName } from "@MEUtils/routeName";
import { BrowserRouter, Routes, Route,  } from "react-router";

import HomeScreen from "@MEScreens/home/homeScreen";
import DashboardScreen from "@MEScreens/dashboard/dashboardScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeName.root} element={<HomeScreen />} />
        <Route path={routeName.dashboard} element={<DashboardScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
