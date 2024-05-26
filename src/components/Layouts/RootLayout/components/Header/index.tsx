import Image from 'next/image'
import React from 'react'
import Search from './Search'

import travelLogo from '@/public/images/travelo-logo-header.png'
import Nav from './Nav'

function Header() {
  return (
    <header className="h-[85px] fixed left-0 right-0 top-0 bg-white shadow-lg p-4 z-20">
      <div className="max-w-screen-xl mx-auto">

        <div className="flex justify-between items-center">



          <div className="flex gap-8">
            <Image src={travelLogo} alt='Travel Logo' height='48' width='182' />

            <Search />
          </div>

          <div className="flex gap-5">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header