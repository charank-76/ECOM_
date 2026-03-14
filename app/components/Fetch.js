"use client"
import { useEffect, useState } from "react"
import { collection, getDocs,where,query } from "firebase/firestore"
import { db } from "../core/firebase"

export default function Fetch({category}) {
    const [products, setProducts] = useState([]);   
    useEffect(() => {
        const fetchproducts=async()=>{
            try{
                const q=query(collection(db,"Items"),where("category","==",category))
                const item=await getDocs(q)

                const items=item.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data()
                }))
                setProducts(items)

            }catch(eror){
                console.log(error)
            }

        }
    if(category){
        fetchproducts()
    }},[category])
  return (
    <div>
   {products.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.unit}</p>
          <p>{item.image}</p>
        </div>
      ))}
    </div>
  )}