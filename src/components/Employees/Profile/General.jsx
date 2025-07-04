import React from 'react'
import MainDetails from './General Folder/MainDetails'
import OtherDetails from './General Folder/OtherDetails'
import ReportingLine from './General Folder/ReportingLine'

const General = () => {
  return (
    <div className='flex gap-8'>
        <MainDetails/>
        <OtherDetails/>
        <ReportingLine/>
    </div>
  )
}

export default General