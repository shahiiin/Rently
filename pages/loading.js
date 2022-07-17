import React from 'react'
import {ScaleLoader} from 'react-spinners'


function loading() {
 
  return (
    <div className='flex flex-col justify-center items-center  h-100'>
      <ScaleLoader />
      <h1 className='text-purple font-bold '>Logging with Singpass...</h1>
    </div>
  )
}

export default loading