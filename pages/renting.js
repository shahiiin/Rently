import React from 'react'

function renting() {
  return (
    <div className=' flex justify-center items-center text-center flex-col'>
      <div>
        <div className='flex text-4xl mt-12 font-extrabold'>
          <p className='text-green-100'>Entire</p>
          <span className='ml-1 text-purple'>renting process</span>
        </div>
        <div className=' w-[300px]'>
          <p className='text-purple'>Advertise, schedule viewings, sign contracts, secure deposits and dispatch repairs...</p>
        </div>
        <div className='mt-4'>
          <p className='text-purple font-extrabold'>Rently</p>
        </div>
      </div>
      <div className='mt-20'>
        <button className='bg-green-100 text-white w-[125px] h-[35px] rounded'>Try Now </button>
        <button className='text-green-100 border border-green-100 w-[125px] h-[35px] rounded ml-4'>Learn More</button>
      </div>
    </div>
  )
}

export default renting