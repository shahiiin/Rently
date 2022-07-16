import React from 'react'

function MainAction() {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <button className='bg-purple text-white mt-10 w-[380px] h-[66px]'>mainaction:sign in</button>
      </div>
      <div className='flex justify-around mt-20 items-center'>
        <button className='bg-purple text-white w-[150px] h-[50px]'>agent usb1</button>
        <button className='bg-purple text-white w-[150px] h-[50px]'>agent usb2</button>
        <button className='bg-purple text-white w-[150px] h-[50px]'>agent usb3</button>
      </div>
    </div>
  )
}

export default MainAction