import React from 'react'
import Aside from '../components/Aside'
import ContentDashbord from '../components/ContentDashbord'

function dashboard() {
  return (
    <div className='flex flex-row'>
      <div className='w-[20%]'>
        <Aside />
      </div>
      <div className='w-[80%]'>
        <ContentDashbord />
      </div>


    </div>
  )
}

export default dashboard