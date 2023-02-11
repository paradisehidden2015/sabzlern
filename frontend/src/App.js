import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./context/authContext";
import "./App.css";

export default function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const router = useRoutes(routes);

  const login = (token) => {
    setToken(token);
    localStorage.setItem("user", JSON.stringify({ token }));
  };
  const logout = () => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isLogIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}
