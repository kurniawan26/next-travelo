'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function Login() {

  const router = useRouter()

  return (
    <div className='container flex justify-center flex-col items-center gap-4'>
      <p className='text-xl font-bold'>This is login page</p>
      <button className="p-4 bg-blue-400 text-white" onClick={() => router.push('/')}>
        Go Home
      </button>
      <button className="p-4 bg-blue-400 text-white" onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  )
}

export default Login