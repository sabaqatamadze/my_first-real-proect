import React from 'react'
import Nav_bar from '../components/nav-bar/nav-bar'
import { Outlet } from 'react-router-dom'
import Fotter from '../components/Fotter/fotter'

function Layout() {
  return (
    <div>
        <Nav_bar/>
        <Outlet/>
        <Fotter/>
    </div>
  )
}

export default Layout