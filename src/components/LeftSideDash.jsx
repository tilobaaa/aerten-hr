import React from 'react'

import Inbox from './Inbox'


const LeftSideDash = () => {
  return (
    <div className='flex-2'>
        {/* sync with accounts */}
        <div className='flex gap-6 items-center border-1 border-[#80808025] rounded-xl p-6 my-4  '>
            
            <img className='h-15 w-15  rounded-full bg-[#EEF5FF]' src="" alt="" />
            <div>
                <h4 className='text-gray-900 text-lg fomt-bold '>Keep in sync with your accounting system</h4>
                <p className='text-sm text-[#808080] w-94'>Now! you can customize your journal voucher the way <br /> you want and get it ready to import to your accounting system</p>
            </div>
            <button className='bg-[#9A4C1E] text-white rounded-md px-4 py-2 text-sm cursor-pointer hover:scale-105 duration-400 transition-all'>Let's get started</button>
        </div>
        {/* inbox */}
       
        <Inbox/>
    </div>
  )
} 

export default LeftSideDash