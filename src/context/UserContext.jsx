import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// create context for the user
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user_status = localStorage.getItem("user_status");
  const [loggedIn, setLoggedIn] = useState(user_status ?? false);
  const navigate = useNavigate();
  const logout_user = () => {
    setLoggedIn(false);
    // remove local storage
    localStorage.removeItem("user_status");
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, logout_user }}>
      {children}
    </UserContext.Provider>
  );
};
