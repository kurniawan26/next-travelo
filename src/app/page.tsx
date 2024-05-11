'use client'

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (
    <div className="container flex justify-center flex-col items-center">
      <p className="text-xl">
        Hello World, this is home
      </p>
      <button className="p-4 bg-blue-400 text-white" onClick={
        () => router.push('/login')
      }>
        Go To Login Page
      </button>
    </div>
  );
}
