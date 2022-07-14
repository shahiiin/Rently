

function LoginForm() {
  return (
    <div className='flex flex-col justify-center items-center h-100'>
      <h1 className='text-purple text-2xl'>Login your account</h1>
      <form>
        <label className="block text-purple ">
          <span className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3">
            Email
          </span>
          <input type="email" name="email"
            className="mt-1 px-3 py-2 h-[53px]  border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:ring-green
           block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
            placeholder="you@example.com" />
        </label>
        <label className="block text-purple">
          <span className=" after:ml-0.5
           after:text-red-500 block text-sm 
           font-medium text-slate-700 px-1 py-3">
            Password
          </span>
          <input type="password" name="password"
            className="mt-1 px-3 py-2 h-[53px] border
          shadow-sm  placeholder-slate-400 
          focus:outline-none border-green focus:ring-green
           block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
            placeholder="Password" />
        </label>
        <div className='space-y-10 space-x-20'>
          <button className='border  border-green-100 bg-transparent text-green-100 rounded-lg w-[161px] h-[50px]'>Register</button>
          <button className='border  border-green-100 bg-green-100 text-white rounded-lg w-[161px] h-[50px]'>Login</button>

        </div>
        <div className='p-2 justify-between'>
          <input id="default-checkbox" type="checkbox"
            className="w-3 h-3 text-green rounded border-green" />
           <label className="ml-2 text-sm text-green">Remember me!</label>
            <a href='#' className='ml-28 text-green text-sm'>Forget Password</a>
           </div>
      </form>
    </div>

  )
}

export default LoginForm