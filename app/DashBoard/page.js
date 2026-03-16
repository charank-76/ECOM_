"use client"
import React from 'react'
import NavBar from '../components/NavBar'
import ProductL from '../components/ProductL'

export default function Dashboard() {
  const products = [
    { id: 1, name: 'Groceries',path:"/Groceries" },
    { id: 2, name: 'Electronics',path:"/Electronics" },
    { id: 3, name: 'Clothing',path:"/Clothing" },
    { id: 4, name: 'Home & Kitchen',path:"/Homek" },
    { id: 5, name: 'Books',path:"/Books" },
    { id: 6, name: 'Sports & Outdoors',path:"/Sports" },
    { id: 7, name: 'Beauty & Personal Care',path:"/Beauty" }
  ];
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen w-full flex flex-col">
      
      <NavBar />

      <div className="relative w-full h-[400px] rounded-b-full overflow-hidden flex items-center justify-center">

      
        <img
          src="https://th.bing.com/th/id/OIP.yA4q94BToKttLAgTdpcswgHaEJ?w=328&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="banner"
          className="absolute w-full h-full object-cover blur-sm"
        />

      
        <div className="absolute inset-0 bg-black/40"></div>

      
        <h1 className="relative text-4xl font-bold text-white text-center">
          Enjoy Your Shopping in <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-bold  text-transparent animate-pulse">
  ShopEase
</span>
        </h1>

      </div>
     <section className="p-6">
        <h2 className="text-7xl font-semibold text-white mb-4 w-1/4 text-right">Categories</h2>
        <div className="flex flex-col space-y-4 gap-2 items-center">
          {products.map((product) => (
            <ProductL 
            key={product.id} 
            name={product.name} 
            path={product.path}/>
          ))}
          
        </div>
      </section>
    </div>

   
  )
}