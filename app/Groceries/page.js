"use client"
import Fetch from "../components/Fetch"
import NavBar from "../components/NavBar"
export default function Groceries() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-gray-900 via-green-900 to-emerald-800">
        <NavBar />
    <div className="text-white p-10 text-3xl flex w-full min-h-screen  flex-wrap items-center gap-10 justify-center">
<h1 className="text-4xl font-extrabold bg-gradient-to-r from-lime-300 via-green-300 to-emerald-400 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
  🥬 Groceries
</h1>
        <Fetch category="Groceries" />
     
    </div>
    </div>
  );
}