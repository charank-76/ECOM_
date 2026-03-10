"use client"
import { useRouter } from "next/navigation"
export default function ProductL({ name,path }) {
    const router = useRouter();
  return (

    <div
    onClick={()=> router.push(path)}
     className="w-3/4 h-[50px] bg-gradient-to-tr from-blue-700 via-pink-800 rounded-full 
    hover:bg-gradient-to-br cursor-pointer shadow-lg hover:scale-[1.02] transition duration-300 shadow-blue-900 border border-blue-300 
    items-center flex justify-between px-6 font-bold text-white">

     
      <h1 className="ml-10 w-1/4 text-left">{name}</h1>

      <span className="text-xl">→</span>

    </div>
  )
}