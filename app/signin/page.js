"use client"
import React from "react"
import { useRouter} from "next/navigation"
import { useState } from "react"
import { login } from "../core/auth"

export default function Home(){
  const router=useRouter()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const  handleSubmit= async()=>{
    try{
      const success=await login(email, password);
            if(success){
                alert("Login successful!");
                router.push("/DashBoard");
            }
            else{
                alert("Login failed. Please check your credentials and try again.");
            }
    }
    catch(error){
      console.error("Error during sign up:",error);
    }
  }

  return(
   <div className="min-h-screen flex justify-center  items-center flex-col bg-gradient-to-br from-blue-500 to-pink-500">
    <div className="bg-white max-h-md p-8 rounded-4xl justify-center items-center text-black border flex flex-col shadow-gray-500 shadow-lg border-gray-300 hover:shadow-2xl w-full max-w-md">
      <h2 className=" font-bold mb-6 text-center text-black  text-3xl">Login</h2>
      
        <input type="text" placeholder="Enter Full Name" value={name} onChange={(e)=>setName(e.target.value)}
        className="w-full text-black mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        
<button onClick={handleSubmit} className="w-[150px]  bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
<div className="mt-4 flex justify-center items-center gap-1 w-full">
  <p className="text-gray-600 text-sm">Don't have an account?</p>
  <span 
    onClick={() => router.push("/")}
    className="text-blue-500 hover:underline cursor-pointer font-bold text-sm"
  >
    Register
  </span>
</div>
    </div>
   </div>  )
}
