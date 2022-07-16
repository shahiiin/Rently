import React from 'react'

function MoreInfo() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <p className='text-purple mt-16 text-5xl'>we need more information</p>
      <form>
        <label className="block text-purple mt-16" />
        <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
          CEA number
        </span>
        <input type="text" name="email"
          className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:border-purple focus:placeholder-purple
           block w-small rounded-md sm:text-sm focus:purple rounded-2xl"
          placeholder="E.g. S1234567A" />
                  <label className="block text-purple " />
        <span className="after:ml-0.5 mt-5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
          NRIC number
        </span>
        <input type="text" name="email"
          className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:border-purple focus:placeholder-purple
           block w-small rounded-md sm:text-sm focus:purple rounded-2xl"
          placeholder="E.g. M1234567N" />
      </form>
      <div>
      <button className='border mt-10  border-none bg-green-100 text-white rounded-lg w-[400px] h-[50px]'>Login</button>
      </div>
    </div>
  )
}

export default MoreInfo