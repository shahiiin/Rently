import React from 'react'
import Image from 'next/image'
import Price from '../public/assets/price.svg'


function Listing() {
 
  const list = [
    {
      'header': 'No listings in your account yet',
      'avatar': require('../public/assets/pic1.svg'),
      'price': '3100 sqft',
      'info': 'Document needed',
    },
    {
      'header': 'Ardmore Residence',
      'avatar': require('../public/assets/pic2.svg'),
      'price': '2185 sqft',
      'info': 'Not signed',
    },
    {
      'header': 'Avenue General de Gaulle...',
      'avatar': require('../public/assets/pic3.svg'),
      'price': '4098 sqft',
      'info': 'Repair requested',
    },
    {
      'header': 'Vinca avenue',
      'avatar': require('../public/assets/pic4.svg'),
      'price': '1598 sqft',
      'info': 'Create contract',
    },
    {
      'header': 'Tilleroyes residence of...',
      'avatar': require('../public/assets/pic5.svg'),
      'price': '4200 sqft',
      'info': 'Review contract',
    },
  ]


  return (
    <div className='flex p-5'>
      <div className='  w-[350px] rounded-3xl shadow-lg  m-20'>
        <p className='p-10 text-purple font-bold text-2xl'>My listings</p>
        {
          list.map((item, index) => {
            return (
              <div key={index} className='flex bg-gray h-10 w-[280px]  items-center ml-5 mt-2 mb-5 rounded-tl-lg rounded-bl-lg overflow-hidden'>
                <Image src={item.avatar} alt='home' className='top-0 left-0 rounded-md ' style={{
                  with: '192px',
                  height: '95px'
                }} />
                <div className='p-2'>
                  <p className='text-purple text-sm'>{item.header}</p>
                  <p className='text-purple text-xs'>{item.price}</p>
                  <div className='flex justify-between '>
                    <Image src={Price} alt='price' />
                    
                    <span className='text-sm text-red ml-16'>{item.info}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Listing