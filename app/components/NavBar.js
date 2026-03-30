"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const router = useRouter()

  return (
    <nav>
      <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 
      font-bold text-xl text-gray-200 p-4 flex shadow-lg items-center">

        <div className="flex items-center gap-2 text-2xl font-[Poppins]">
          <span className="text-pink-400">🛍️</span>
          <span className="text-white">Shop</span>
          <span className="text-pink-400">Ease</span>
        </div>

        <div className="justify-end gap-20 flex w-full">

          <button
            className="hover:text-pink-400 transition"
            onClick={() => router.push('/DashBoard')}
          >
            Dashboard
          </button>

          <button
            className="hover:text-pink-400 transition"
            onClick={() => router.push('/Cart')}
          >
            Cart
          </button>
           <button
            className="hover:text-pink-400 transition"
            onClick={() => router.push('/My')}
          >
            MyOrders
          </button>

          <button
            className="mr-[50px] hover:text-pink-400 transition"
            onClick={() => router.push('/Dashboard/Settings')}
          >
            Profile
          </button>

        </div>

      </div>
    </nav>
  )
}