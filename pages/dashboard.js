import React from 'react'
import Aside from '../components/Aside'
import ContentDashbord from '../components/ContentDashbord'
import Listing from '../components/Listing'

function dashboard() {
  return (
    <div className='flex flex-row'>
      <Aside />
      {/* <ContentDashbord /> */}
      <Listing/>
    </div>
  )
}

export default dashboard