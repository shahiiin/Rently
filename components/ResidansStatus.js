import React from 'react'

function ResidansStatus() {
  return (
    <>
      <div className='flex w-[400px] mt-2 ml-xl '>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Residential status
          </span>
          <button className='bg-dark-gray text-purple w-[65px] h-10'>Citizen</button>
          <button className='bg-dark-gray text-purple w-[146px] h-10'>Permanent resident</button>
          <button className='bg-dark-gray text-purple w-[65px] h-10'>Foreigner</button>
        </label>
      </div>


    </>

  )
}

export default ResidansStatus