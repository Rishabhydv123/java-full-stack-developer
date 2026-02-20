import React from "react";
import { Navbar } from "./Components/Navbar1";
import { Home } from "./Pages/Home";
import { AllRoutes } from "./Router/AllRouters";
import { TodoProvider } from "./Context/TodoContext";

export const App = () => {
  return(
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
};
