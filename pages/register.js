import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'


function Register() {

  const [value, setValue] = useState()


  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-purple text-2xl mt-20'>Sign up to Rently</h1>
      <form>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Full legal name
          </span>
          <input type="text" name="email"
            className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:border-purple focus:placeholder-purple
           block w-small rounded-md sm:text-sm focus:purple rounded-2xl"
            placeholder="shahin shahi" />
        </label>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Phone number
          </span>
          <PhoneInput
            style={{
              display: 'block',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              borderRadius: '0.375rem',
              borderWidth: '1px',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              height: '53px',
            }}
            placeholder="Enter phone number"
            value={value}
            onChange={setValue} />
        </label>

        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Email
          </span>
          <input type="email" name="email"
            className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:border-purple focus:placeholder-purple
           block w-small rounded-md sm:text-sm focus:purple rounded-2xl"
            placeholder="shahin@yahoo.com" />
        </label>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            CEA number
          </span>
          <input type="number" name="email"
            className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:border-purple focus:placeholder-purple
           block w-small rounded-md sm:text-sm focus:purple rounded-2xl"
            placeholder="e.g s1285464" />
        </label>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            NRIC number
          </span>
          <input type="number" name="email"
            className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:border-purple focus:placeholder-purple
           block w-small rounded-md sm:text-sm focus:purple rounded-2xl"
            placeholder="e.g s1285464" />
        </label>

        <div className='space-y-10 space-x-20 mb-24'>
          <button className='border  border-green-100 bg-transparent text-green-100 rounded-lg w-[161px] h-[50px]'>Login</button>
          <button className='border  border-green-100 bg-green-100 text-white rounded-lg w-[161px] h-[50px]'>Sgin up</button>
        </div>
      </form>
    </div>

  )
}

export default Register