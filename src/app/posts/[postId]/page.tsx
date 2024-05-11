'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import { DUMMY_POST } from '../__mocks__';

function DynamicRoutes() {

  const { postId } = useParams();
  const currentData = DUMMY_POST.find(data => data.id === Number(postId))

  console.log(currentData)

  return (
    <div className='container flex flex-col h-screen gap-4'>
      <h1>Posts Page</h1>

      {currentData && (
        <div className='flex flex-col gap-2 m-4'>
          <p className='text-lg font-bold'>{currentData.title}</p>
          <p className='text-gray-600'>{currentData.author}</p>
          <p className='text-gray-600'>{currentData.content}</p>
        </div>
      )}
    </div>
  )
}

export default DynamicRoutes