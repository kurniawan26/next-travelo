import Image from 'next/image'
import React from 'react'

import searchIcon from '@/public/images/icons/search-icon.svg'

function Search() {
  return (
    <div className='flex items-center'>
      <input placeholder='Cari Tempat Liburan' type="text" className='px-4 py-3 text-sm border border-gray-50 rounded-l-md text-gray-50' />
      <button className='flex justify-center items-center bg-blue-100 border-blue-100 text-white text-sm 
      rounded-r-md h-[46px] w-[46px]'>
        <Image src={searchIcon} height='24' width='24' alt='Search Icon' />
      </button>
    </div>
  )
}

export default Search