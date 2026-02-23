import React from "react";

// create context
export const AuthContext = React.createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);

  const toggleAuth = () => {
    setIsAuth((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};