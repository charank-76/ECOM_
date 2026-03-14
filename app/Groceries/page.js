"use client"
import Fetch from "../components/Fetch"
export default function Groceries() {
  return (
    <div className="text-white p-10 text-3xl">
        <Fetch category="Groceries" />
      Grocery Page
    </div>
  );
}