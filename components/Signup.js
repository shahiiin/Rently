import React from 'react'

function Signup() {
  return (
    <div className='flex justify-center items-center flex-col'>
       <div className=' text-purple text-xl mt-20'>
        <p>How do you want to sign up ?</p>
       </div>
       <div className='w-[388px] text-purple text-center mt-4'>signpass enables you to retrieve your personal data and auto-fill to sign up form. making your application more fsfaqdwa</div>
       <div>
        <button className='bg-red2 mt-10 text-white border-none rounded w-[262px] h-[37px]'>retrieve myinfo with signpass</button>
       </div>
       <div>
        <button className='text-purple mt-3 rounded border-2 w-[262px] h-[37px] border-purple'>sign up manually</button>
       </div>
    </div>
  )
}

export default Signup