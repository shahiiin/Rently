import React from 'react'

function ConfirmReview() {
  return (
    <>
      <div className='flex flex-col'>
        <p className='text-dolphin-gray ml-48 mt-8'>HDB OWNERSHIP - PASIR RIS ROAD</p>
      </div>
      <div className='flex justify-center items-center'>
        <div className='bg-light-gray text-purple rounded w-[300px] mt-4 pl-2 '>
          <p>Date of Purchase</p>
          <input className='outline-none mb-2' placeholder='April 27th 2019'/>
        </div>
        <div className='bg-light-gray text-purple rounded w-[300px] mt-4 pl-2 ml-4 mr-4'>
          <p>Type</p>
          <input className='outline-none mb-2' placeholder='Two-bedroom'/>
        </div>
        <div className='bg-light-gray text-purple rounded w-[300px] mt-4 pl-2'>
          <p>Number of owners</p>
          <input className='outline-none mb-2' placeholder='2'/>
        </div>
      </div>
      <div className='flex justify-center items-center  h-20'>
        <button className='bg-green-100 text-white w-[300px] rounded mt-10 mb-10 h-[45px]' >confirm</button>
      </div>
    </>


  )
}

export default ConfirmReview