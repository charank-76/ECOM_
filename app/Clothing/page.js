"use client"
import Fetch from "../components/Fetch"
import NavBar from "../components/NavBar"
export default function Groceries() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-gray-900 via-purple-900 to-fuchsia-900">
        <NavBar />
    <div className="text-white p-10 text-3xl flex w-full min-h-screen  flex-wrap items-center gap-10 justify-center">
<h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
  👕 Clothing
</h1>
        <Fetch category="Clothing" />
     
    </div>
    </div>
  );
}