import React from 'react'
import Navbar from '../Components/Navbar'
import Join from '../Components/Join'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Navbar />
        {/* <Join /> */}
        <Outlet />
    </div>
  )
}

export default Home