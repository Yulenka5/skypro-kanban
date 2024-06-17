import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Registr from "./pages/Rigastration/registr.jsx";
import Login from "./pages/Login/login.jsx";
import PopExit from "./pages/PopExit/PopExit.jsx";
import "react-day-picker/dist/style.css";
import PopBrowse from "./pages/PopBrowse/PopBrowse.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import { useState } from "react";



function App() {
  // const [isAuth, setAuth] = useState(true);
  const [userData, setUserData] = useState(null);


  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={userData} />}>
        <Route path="/" element={<HomePage />}>
          <Route path="/exit" element={<PopExit setAuth={setUserData} />} />
          <Route path="/card/:id" element={<PopBrowse />} />
        </Route>
      </Route>
      <Route path="/register" element={<Registr setAuth={setUserData}/>} />
      <Route path="/login" element={<Login setAuth={setUserData} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
