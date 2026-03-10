"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const router = useRouter()
  return (
    <nav><div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
  font-bold text-xl text-white p-4 flex shadow-lg  items-center">
   <div className="flex items-center gap-2 text-2xl font-[Poppins]">

  <span className="text-white font-[Montserrat] ">🛍️</span>
  <span className="text-white">Shop</span>
  <span className="text-pink-400">Ease</span>
</div>
  <div className=" justify-end gap-20 flex w-full">

    <button className="hover:text-pink-200"
      onClick={() => router.push('/Dashboard')}>
      Dashboard
    </button>

    <button className="hover:text-pink-200"
      onClick={() => router.push('/Dashboard')}>
      Cart
    </button>

    <button className="mr-[50px] hover:text-pink-200"
      onClick={() => router.push('/Dashboard/Settings')}>
      Profile
    </button>

  </div>
  </div>
</nav>   
  )
}
