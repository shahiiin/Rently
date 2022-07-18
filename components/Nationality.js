import React from 'react'
import DropdownMenu from './DropdownMenu'

function Nationality() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <form>
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
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Full legal name
          </span>
          <input type="email" name="email"
            className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:ring-green
           block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
            placeholder="Tarik Jereme Sybe" />
        </label>
        <label className='block text-purple'>
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Nationality
          </span>
          <input type="email" name="email"
            className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:ring-green
           block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
            placeholder="Sweeden" />

        </label>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Type of property
          </span>
          <button className='bg-dark-gray text-purple w-[65px] h-10'>HDB</button>
          <button className='bg-dark-gray text-purple w-[146px] h-10'>Private residential</button>

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
      </form>
    </div>
  )
}

export default Nationality