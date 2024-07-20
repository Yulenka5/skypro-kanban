import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Registr from "./pages/Registration/registr.jsx";
import Login from "./pages/Login/login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import {Exit} from "./pages/Exit/Exit.jsx";
import {NewCard} from "./pages/NewCard/NewCard.jsx";
import "react-day-picker/dist/style.css";
import {Browse} from "./pages/Browse/Browse.jsx";

function App() {
 
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />}>
          <Route path="/exit" element={<Exit />} />
          <Route path="/card/:id" element={<Browse />} />
          <Route path="/newcard" element={<NewCard />} />
        </Route>
      </Route>
      <Route path="/register" element={<Registr />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
