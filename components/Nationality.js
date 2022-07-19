import React from 'react'
import DropdownMenu from './DropdownMenu'
import UploadFile from './UploadFile'


function Nationality() {


  return (

    <div className='flex flex-col justify-center items-center h-130'>
      <form>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Residential status
          </span>
          <button className='bg-dark-gray text-purple w-[65px]
           h-[40px] rounded-md'>Citizen</button>
          <button className='bg-dark-gray text-purple w-[146px]
           h-[40px] ml-5 rounded-md'>Permanent resident</button>
          <button className='bg-dark-gray text-purple w-[65px]
           h-[40px] ml-5 rounded-md'>Foreigner</button>
        </label>
        <label className='block text-purple'>
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Nationality
          </span>
          <DropdownMenu />
        </label>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            NRIC number
          </span>
          <input type="email" name="email"
            className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:ring-purple
           block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
            placeholder="E.g. M3344456N" />
        </label>

        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Type of property
          </span>
          <button className='bg-dark-gray text-purple w-[65px] h-[40px] rounded-md'>HDB</button>
          <button className='bg-dark-gray text-purple w-[146px] h-[40px] ml-5 rounded-md'>Private residential</button>
        </label>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Proof of ownership
          </span>
          <span>You can login here at INLIS portal, take a photo that clearly<br></br>
            shows your address and upload it here.</span>
        </label>
        <UploadFile />
        <button></button>
      </form>

    </div>
  )
}

export default Nationality