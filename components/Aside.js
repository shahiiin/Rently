import React from 'react'
import { MdIosShare } from 'react-icons/md'
import { FaFileContract } from 'react-icons/fa'
import {ImClock} from 'react-icons/im'
import {GiAutoRepair} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'


function Aside() {

  return (
    <div className='bg-purple h-100  p-8'>
      <p className='text-white'>Jereme Tarik</p>
      <div className='mt-20'>
        <div className='flex text-[#ffffff]'>
          <MdIosShare className='m-1 mr-2' />
          <p>Share listings</p>
        </div>
        <div className='flex text-[#ffffff] mt-10'>
          <FaFileContract className='m-1 mr-2'/>
          <p>Create a new contract</p>
        </div>
        <div className='flex text-[#ffffff] mt-10'>
          <ImClock className='m-1 mr-2'/>
          <p>Create a new viewing</p>
        </div>
        <div className='flex text-[#ffffff] mt-10'>
        <GiAutoRepair className='m-1 mr-2'/>
          <p>Create a repair request</p>
        </div>
        <div className='flex text-[#ffffff] mt-10'>
        <AiFillHome className='m-1 mr-2'/>
          <p>Add a listing manually</p>
        </div>
        
      </div>
    </div>
  )
}

export default Aside