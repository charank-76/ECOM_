"use client"
import { useEffect, useState } from "react"
import { collection, getDocs,where,query,setDoc,doc } from "firebase/firestore"
import { db } from "../core/firebase"
import { useRouter } from "next/navigation"


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

//     const handleSubmit = async (item)=>{
// try{
//     await setDoc(doc(db,"Cart",item.id),{
//         name:item.name,
//         price:item.price,
//         unit:item.unit,
//         image:item.image
//     })
//     alert("Added to Cart"   )
// }
//     catch(error){
//         console.log(error)
//     }}
const handleSubmit = async (item) => {
  try {

    const cartI = doc(db,"Cart",item.id)

    const cartRep = await getDoc(cartI)

    if(cartRep.exists()){
      
      await updateDoc(cartI,{
        quantity: cartRep.data().quantity + 1
      })
    }
    else{
      
      await setDoc(cartI,{
        name:item.name,
        price:item.price,
        unit:item.unit,
        image:item.image,
        quantity:1
      })
    }

    alert("Added to Cart")

  } catch(error){
    console.log(error)
  }
}
  return (
    
    <div className="flex flex-wrap justify-center gap-10   items-center">
        
   {products.map((item) => (
        <div key={item.id}>
             <div className="flex flex-col items-center  hover:bg-gray-700  hover:scale-[1.05] hover:shadow-2xl hover:shadow-gray-500 transition-all bg-gray-500 p-6 rounded-3xl w-[250px]"    >
      <img
        src={item.image}
        className="w-[180px] h-[160px] object-contain mb-4 rounded-4xl"
      />
      <h3 className=" dark:text-white font-bold text-xl mb-2">{item.name}</h3>
      <div className=" dark:bg-white flex justify-between items-center bg-white rounded-full px-4 py-2 w-[80%] mb-4">
        <div className="text-yellow-500 text-lg font-bold">{item.unit}</div>
        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-[16px] font-semibold">
         ₹ {item.price}
        </div>
       
      </div>
      <button
className="bg-green-500 text-white px-3 hover:bg-green-700 cursor-pointer py-1 rounded-full text-sm font-semibold"
onClick={() => handleSubmit(item)}
>
Add to Cart
</button>
     
    </div>
          {/* <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.unit}</p>
          <p>{item.image}</p> */}
        </div>
      ))}
    </div>
   
  )}