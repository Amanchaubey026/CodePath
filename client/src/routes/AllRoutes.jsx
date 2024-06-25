// import React from 'react'

import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HeroPage from "../pages/HeroPage"
import Navbar from "../components/Navbar"

const AllRoutes = () => {
  return (
    <Box>
        <Navbar/>
      <Routes>
        <Route path="/"  element={<HeroPage/>}/>
      </Routes>
    </Box>
  )
}

export default AllRoutes
