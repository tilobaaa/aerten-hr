import React from 'react'
import SideBar from '../components/SideBar'
import MainDashBar from '../components/MainDashBar'

const Dashboard = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <MainDashBar/>
    </div>
  )
}

export default Dashboard