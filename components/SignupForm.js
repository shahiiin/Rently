import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'


function SignupForm() {


  const [value, setValue] = useState()
  const [user, setUser] = useState('')

  const url = 'https://publicapi.dev.rently.sg/singpasstoken/6d349c7f-4d38-41a2-85db-2d04006e7c22'

  const post = axios.post(url)
    .then(response => {
      setUser(response.data)
      console.log(response.data, 'aa')
    })
  useEffect(() => {
    post()
  }, [])

  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-purple text-4xl font-bold'>Sign up to Rently</h1>
        <form>
          <label className="block text-purple ">
            <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
              Full legal name
            </span>
            <input type="email" name="email"
              className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:ring-purple
           block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
              placeholder="Tarik Jereme Sybe" />
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
          focus:outline-none border-green focus:ring-purple
           block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
              placeholder="tarik@yahoo.com" />
          </label>
        </form>
      </div>
    </div>
  )
}

export default SignupForm