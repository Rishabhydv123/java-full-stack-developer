import React from "react"
import { BreadCrumbs } from "./Pages/BreadCrumbs"
import { Navbar } from "./Pages/Navbar"
import { AllRoutes } from "./Routes/AllRoutes"

 export function App() {

  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <AllRoutes />
    </>
  )
}

