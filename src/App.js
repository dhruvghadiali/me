import { routeName } from "@MEUtils/routeName";
import { BrowserRouter, Routes, Route,  } from "react-router";

import HomeScreen from "@MEScreens/home/homeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeName.root} element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
