import React from 'react'

function Review() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div>
      <p className='text-purple text-4xl m-20'>Review and confirm</p>
    </div>
    <div className='flex'>
      <div>
        <div className='bg-light-gray ml-4 rounded w-[300px] text-purple h-[64px]'>
          <p className='pl-2'>Legal Name</p>
          <input className='pl-2 outline-none' placeholder='Jereme Pung'/>
        </div>
        <div className='bg-light-gray ml-4 mt-4 rounded w-[300px] text-purple h-[64px]'>
          <p className='pl-2'>Residential Status</p>
          <input className='pl-2 outline-none' placeholder='Citizen'/>
        </div>
        <div className='bg-light-gray ml-4 mt-4 rounded w-[300px] text-purple h-[64px]'>
          <p className='pl-2'>Type of property</p>
          <input className='pl-2 outline-none' placeholder='HDB'/>
        </div>
      </div>
      <div>
        <div className='bg-light-gray ml-4 rounded w-[300px] text-purple h-[64px]'>
          <p className='pl-2'>Phone Number</p>
          <input className='pl-2 outline-none' placeholder='987634567'/>
        </div>
        <div className='bg-light-gray ml-4 mt-4 rounded w-[300px] text-purple h-[64px]'>
          <p className='pl-2'>Nationality</p>
          <input className='pl-2 outline-none' placeholder='Singapore'/>
        </div>
        <div className='bg-light-gray ml-4 mt-4 rounded w-[300px] text-purple h-[64px]'>
          <p className='pl-2'>Private Property Ownership</p>
          <input className='pl-2 outline-none' placeholder='19 Farrer rd'/>
        </div>
      </div>
      <div>
        <div className='bg-light-gray ml-4 rounded w-[300px] text-purple h-[64px]'>
          <p className='pl-2'>Email Address</p>
          <input className='pl-2 outline-none' placeholder='jereme.pung@gmail.com'/>

        </div>
        <div className='bg-light-gray ml-4 mt-4 rounded w-[300px] text-purple h-[64px]'>
          <p className='pl-2'>NRIC</p>
          <input className='pl-2 outline-none' placeholder='****1234S'/>

        </div>
        <div className='bg-light-gray ml-4 mt-4 rounded w-[300px] text-purple h-[64px]'>
          <p className='pl-2'>Date of birth</p>
          <input className='pl-2 outline-none' placeholder='Date of birth'/>
         
        </div>
      </div>
    </div>

  </div>

  )
}

export default Review