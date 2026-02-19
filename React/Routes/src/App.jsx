import React from "react";
import { Navbar } from "./Components/Navbar1";
import { AllRoutes } from "./Router/AllRouters";

export const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
};
