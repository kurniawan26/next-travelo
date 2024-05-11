import React from 'react'
import { DUMMY_POST } from './__mocks__'
import Link from 'next/link'

function Posts() {
  return (
    <div className='container flex flex-col h-screen gap-4'>
      <h1>Posts Page</h1>

      <div className="grid grid-cols-3 gap-4">
        {DUMMY_POST.map(data => {
          return <div key={data.id} className='border p-4 rounded-lg'>
            <Link href={`/posts/${data.id}`}>{data.title}</Link>
            <p className='text-gray-600'>{data.author}</p>
            <p className='text-gray-600'>{data.content}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Posts