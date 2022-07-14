import React from 'react'
import {ScaleLoader} from 'react-spinners'
function loading() {
  const style = {
    spinners:{
      color:'#301064 !important'
    }
  }
  return (
    <div className='flex flex-col justify-center items-center  h-100'>
      <ScaleLoader 
      style={style.spinners}
      />
      <h1 className='text-purple font-bold '>Logging with Singpass...</h1>
    </div>
  )
}

export default loading