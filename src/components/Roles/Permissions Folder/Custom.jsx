import React from 'react'

const Custom = () => {
  return (
    <div className='h-80 w-full flex flex-col gap-5 items-center justify-center'>
        <div className='w-[9.1875rem] h-[4.875rem] bg-[#d9d9d9]'></div>
        <p className='w-[21.25rem] font-medium text-sm '>If you need to set permission for a specific team, role or Individual, click here to search and add them</p>
        <button className='px-4 py-[0.62rem] flex gap-2 items-center cursor-pointer border rounded-[1.8125rem] border-[#e6e7ec] '>
            <p className='text-[1rem] text-[#676E7E]'>+</p>
            <p className='text-sm text-[#0e2354]'>Add</p>
        </button>
    </div>
  )
}

export default Custom