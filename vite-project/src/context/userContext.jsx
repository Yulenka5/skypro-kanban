import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext(null);

function getLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    return null;
  }
}

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck")
  const [user, setUser] = useState(getLocalStorage());
  const navigate = useNavigate();

  const loginUser = (res) => {
    setUser(res);
    localStorage.setItem("user", JSON.stringify(res));
    navigate("/");
  };

  const logoutUser = () => {
    setUser(null);
    navigate("/login");
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, token, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
