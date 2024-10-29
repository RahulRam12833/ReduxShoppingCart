import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const RootLayout = () => {
  return (
    <>
    <div><NavBar/></div>
    <Outlet/>
    </>
  )
}

export default RootLayout