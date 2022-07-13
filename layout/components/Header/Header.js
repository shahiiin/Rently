import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.svg'

function Header() {

  return (
    <header className='flex border-b-2 px-5 py-5 
    border-[#A3C5C4] w-full'>
      <Image src={Logo} alt='logo' />
      <h1 className='text-purple ml-3 text-2xl font-bold'>Rently</h1>
    </header>
  )
}

export default Header