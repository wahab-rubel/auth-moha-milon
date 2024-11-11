import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
function Root() {
  return (
    <div>
     <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Root
