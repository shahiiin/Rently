import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'



function SignupForm() {

  const url = 'https://publicapi.dev.rently.sg/singpasstoken/a_FgbP52KimMeDntMy_bLXwY6AVUiDXHWwRPk9aOhe0'

  const [value, setValue] = useState()

  const [data, setData] = useState({
    email: "",
    name: "",
    number: ""
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handelNumberChange = (e) =>{
    setData({...data, number: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(url, data, {
      headers: {
        accept: 'text/plain'
      }
    }
    )
      .then(response => {
        console.log()
      })
  }


  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-purple text-4xl font-bold'>Sign up to Rently</h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-purple ">
            <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
              Full legal name
            </span>
            <input
              value={data.name}
              onChange={handleChange}
              type="text"
              name="name"
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
              value={data.number}
              name='number'
              onChange={handelNumberChange}
            />


          </label>
          <label className="block text-purple ">
            <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
              Email
            </span>
            <input
              value={data.email}
              onChange={handleChange}
              type="email"
              name="email"
              className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:ring-purple
           block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
              placeholder="tarik@yahoo.com" />
          </label>
          <button type='submit' >Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignupForm