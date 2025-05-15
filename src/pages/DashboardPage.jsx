import React from 'react'
import { Outlet } from 'react-router-dom'

export const DashboardPage = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Outlet />
    </div>
  )
}
