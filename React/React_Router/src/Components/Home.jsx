import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { isAuth, toggleAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuth) {
      navigate("/users");
    }
  }, [isAuth, navigate]);

  return (
    <>
      <h1>Home</h1>
      <button onClick={toggleAuth}>Login</button>
    </>
  );
};