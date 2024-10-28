import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <div>Navigation</div>
    <Outlet/>
    </>
  )
}

export default RootLayout