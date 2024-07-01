import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Registr from "./pages/Rigastration/registr.jsx";
import Login from "./pages/Login/login.jsx";
import PopExit from "./pages/PopExit/PopExit.jsx";
import "react-day-picker/dist/style.css";
import PopBrowse from "./pages/PopBrowse/PopBrowse.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PopNewCard from "./pages/PopNewCard/PopNewCard.jsx";


function App() {
 
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />}>
          <Route path="/exit" element={<PopExit />} />
          <Route path="/card/:id" element={<PopBrowse />} />
          <Route path="/newcard" element={<PopNewCard/>} />
        </Route>
      </Route>
      <Route path="/register" element={<Registr />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
