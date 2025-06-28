import React from 'react'
import helpCircleSvg from '../../assets/help-circle.svg'
import downloadSvg from '../../assets/download.svg';
import addSvg from '../../assets/add.svg'

const MainEmployeesBar = () => {
  return (
    <div className='w-full p-8' >
      <div className='flex justify-between items-center'>
        <div className='flex items-start font-medium'>
            <h3 className='text-[#101828] text-2xl'>Employees</h3>
            <img className='w-4 h-4' src={helpCircleSvg} alt="" />
            <p className='text-xs text-[#93312B] px-2 py-1 -mt-1 bg-[#F9F5FF] rounded-2xl'>100</p>
        </div>
        <div className='flex gap-2'>
            <button className='py-2 px-4 flex items-center gap-2 border-1 border-[#E6E7EC] rounded-lg'>
                <img className='w-4 h-4' src={downloadSvg} alt="" />
                <p className='text-sm text-[#0E2354]'>Export</p>
            </button>
            <button className='py-2 px-4 flex items-center gap-2 bg-[#6A1039]  rounded-lg'>
                <img className='w-4 h-4' src={addSvg} alt="" />
                <p className='text-sm text-white'>New Employee</p>
            </button>
        </div>
      </div>
    </div>
  )
}

export default MainEmployeesBar
