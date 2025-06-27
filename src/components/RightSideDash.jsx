import React from 'react'
import { scheduleData } from '../assets/requestArray';
import circlePng from '../assets/circle.png';

const RightSideDash = () => {
  return (
    <div className='flex-1 flex flex-col gap-7 mt-4 '>
      {/* schedule */}
      <div className='px-2 py-4  border-1 border-[#F2F2F2] rounded-xl'>
          <div className='flex justify-between mb-7'>
            <p className='font-bold text-lg'>Schedule</p>
            <button className='text-[#808080] text-sm cursor-pointer hover:underline'>View all</button>
          </div>
          {/* individual schedule */}
          <div className='flex flex-col gap-3'>
            {scheduleData.map((schedule)=>(
              <div className='p-6 pt-3 border-1 bg-[#FCFCFC] rounded-lg border-[#EAECF0]' id={schedule.id}>
                <p className='text-xs text-[#808080]'>Tomorrow</p>
                <p className='text-black text-lg font-bold'>{schedule.time}</p>
                <div className='flex gap-2 text-xs text-[#B3B3B3]'>
                  <img src={circlePng} alt="" />
                  <p>{schedule.location}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
      {/* leave balance */}
      <div className='p-6 pr-3 border-1 border-[#F2F2F2] rounded-xl'>
        <p className='font-bold text-black text-lg mb-6'>Leave Balance</p>
        <div className='flex items-center justify-between'>
          <div className='py-4'>
            <p className='text-xs'>Annual Balance</p>
            <p className='text-[#101828] text-xl font-bold'>70 days</p>
          </div>
          <button className='px-4 py-2 border-1 border-[#D0D5DD] rounded-lg text-sm text-[#344054]'>Request Leave</button>
        </div>
        <div className='flex gap-2'>
          <div className='p-4 flex-1 flex flex-col gap-4 border-1 rounded-md border-[#EAECF0] bg-[#FCFCFC]'>
            <p className='text-xs'>Available to use</p>
            <p className='text-[#52C41A] text-xl font-bold'>70 days</p>
          </div>
          <div className='p-4 flex-1 flex flex-col gap-4 border-1 rounded-md border-[#EAECF0] bg-[#FCFCFC]'>
            <p className='text-xs'>Used</p>
            <p className='text-[#EE6352] text-xl font-bold'>0 days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideDash