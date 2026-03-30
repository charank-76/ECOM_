"use client"
import {useState,useEffect} from "react"
import { collection, onSnapshot,deleteDoc,doc,updateDoc,getDoc,setDoc } from "firebase/firestore"
import { db } from "../core/firebase"
import { useRouter } from "next/navigation"
import NavBar from '../components/NavBar'

export default function Cart(){
    const router=useRouter()
    const[Items,setitems]=useState([])
    let total=0
    Items.forEach((item) => {
    total += item.price * item.quantity
  })
    useEffect(()=>{
        const unsub=onSnapshot(collection(db,"Cart"),(snapshot)=>{
            const items=snapshot.docs.map((doc)=>({ 
                ...doc.data(),
                id:doc.id
            }))
            setitems(items)
        })
        return unsub

    },[])

    const deleteItem=async(id)=>{

        try{
            const item=Items.find((i)=>i.id===id)
            if(item.quantity>1){
            await updateDoc(doc(db,"Cart",id),{
                quantity: item.quantity - 1
            })
        }else{
            await deleteDoc(doc(db,"Cart",id))}
        } catch (error) {
            console.error("Error deleting item: ", error)
        }
    }
 const buyItem=async(item)=>{
    try{
        const buyI=doc(db,"MyOrder",item.id)
       const buyRep = await getDoc(buyI)
       if(buyRep.exists()){
        await updateDoc(buyI,{
            quantity:buyRep.data().quantity+1
        })

       }else{
         await setDoc(buyI,{
                name:item.name,
                price:item.price,
                unit:item.unit,
                image:item.image,
                quantity:1
              })}
alert("Added to MyOrder")
    }catch(error){
    console.log(error)
  }
 }
 const buyAll = async () => {
  try {
    for (let item of Items) {
      const buyRef = doc(db, "MyOrder", item.id)
      const buySnap = await getDoc(buyRef)

      if (buySnap.exists()) {
        await updateDoc(buyRef, {
          quantity: buySnap.data().quantity + item.quantity
        })
      } else {
        await setDoc(buyRef, {
          name: item.name,
          price: item.price,
          unit: item.unit,
          image: item.image,
          quantity: item.quantity
        })
      }

      
    }

    alert("All items added to MyOrder ✅")
  } catch (error) {
    console.log(error)
  }
}

    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ">
            <NavBar />
            <div className="flex px-6 items-center flex-col">
            <h1 className="text-4xl font-extrabold mt-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
      🛒 Your Cart
    </h1>
     <div className=" mt-8  max-w-4xl w-full space-y-6 ">
                {Items.length > 0 ? (
                    Items.map((item) => (
                       <div
            key={item.id}
            className="flex justify-between items-center bg-gray-800/80  rounded-2xl shadow-xl p-4 hover:scale-[1.01] transition"
          >    <div className="flex items-center gap-6">
              <img
                src={item.image}
                className="w-[110px] h-[110px] object-contain rounded-xl bg-white p-2"
              />
      <div >
                                <h2 className="text-xl font-bold text-white">{item.name}</h2>
                                <p className="text-gray-300">Price: ₹{item.price}</p>
                                <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
                                </div></div>
                               <div className="flex flex-col gap-3">
                               <button
                onClick={() => buyItem(item)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold transition"
              >
                Buy Now
              </button>
                                <button
                onClick={() => deleteItem(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold transition"
              >
                Delete
              </button>

                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 bg-amber-50 p-4 rounded-3xl">Your cart is empty.</p>
                )}
            </div>
             <div className="mt-8 max-w-4xl w-full bg-gray-800/90 rounded-2xl p-6 shadow-xl flex justify-between items-center">

  
  <div className="text-white text-xl font-bold">
    Total: <span className="text-green-400">₹ {total}</span>
  </div>

 
  <button
    onClick={buyAll}
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition"
  >
    Buy All
  </button>

</div>
        </div>
       
        </div>

    )
}