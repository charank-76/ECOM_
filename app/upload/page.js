
// import { collection, addDoc } from "firebase/firestore"
// import { db } from "../core/firebase"
// export default function UploadProducts() {


//  const products = [

//   // Groceries
//   { name: "Rice", category: "Groceries", price: 60, unit: "1 kg", image: "https://www.bing.com/th/id/OIP.cUsdRk3woXzpYJQRB9txUgHaHa?w=193&h=193&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" },
//   { name: "Milk", category: "Groceries", price: 40, unit: "1 litre", image: "https://www.bing.com/th/id/OIP.q8gh6eEDaixG5mhUoHpSlgHaJL?w=193&h=239&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" },
//   { name: "Bread", category: "Groceries", price: 35, unit: "1 pack", image: "https://www.bing.com/th/id/OIP.b93fvxyaWZ6RWIgA7V-0hAAAAA?w=193&h=240&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" },
//   { name: "Sugar", category: "Groceries", price: 50, unit: "1 kg", image: "https://www.bing.com/th/id/OIP.ir_y5xKefhE3SslMynVAvgHaI1?w=193&h=230&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" },
//   { name: "Eggs", category: "Groceries", price: 70, unit: "12 pcs", image: "https://www.bing.com/th/id/OIP.IqaFFRptG5RhPi7q9_EmvgHaHa?w=193&h=193&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" },
//   { name: "Butter", category: "Groceries", price: 90, unit: "500 g", image: "https://th.bing.com/th/id/OIP.EzjUSA6aCWb3DuXw1X6HkAHaHa?w=193&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Cheese", category: "Groceries", price: 120, unit: "200 g", image: "https://th.bing.com/th/id/OIP.9bcAU0EZeT5F9veHb4BUmAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Tea Powder", category: "Groceries", price: 80, unit: "250 g", image: "https://th.bing.com/th/id/OIP.JyHHdoY6LHQW8C94cCIZZgHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Coffee Powder", category: "Groceries", price: 150, unit: "250 g", image: "https://th.bing.com/th/id/OIP.__sZ3aWrnSZG7QCjXDCFdAHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Cooking Oil", category: "Groceries", price: 180, unit: "1 litre", image: "https://th.bing.com/th/id/OIP.1gEPBOv1eapZIpciT0Gr5AHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

//   // Electronics
//   { name: "Laptop", category: "Electronics", price: 60000, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.ypVtvyawfIDnAUGF5ALa0gHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Smartphone", category: "Electronics", price: 25000, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.LKJasBmOEInAb9GypkZE5gHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Tablet", category: "Electronics", price: 18000, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.rw3VKGnUbnGIXp9P6AIw5QHaHO?w=181&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Monitor", category: "Electronics", price: 12000, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.7unmLzcuYlWK3u9yGCADAAHaHa?w=195&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Keyboard", category: "Electronics", price: 1500, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.INw-Av3vXAn-eCvQw8G9uAHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Mouse", category: "Electronics", price: 700, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.cA0h0baufPqNr41z-0djzQHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Headphones", category: "Electronics", price: 2000, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.gF74upMr4rxS-4cUqcGmtwHaHa?w=186&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Bluetooth Speaker", category: "Electronics", price: 3000, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.hJ5dQXc-PlDAr9o4dXdHxwHaE6?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Power Bank", category: "Electronics", price: 1200, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.grW__zFS1dh_IjbrxI34mAHaGv?w=197&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Smart Watch", category: "Electronics", price: 5000, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.gr7ZzGpMCxkiFrCJw-tfUQAAAA?w=186&h=255&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

//   // Clothing
//   { name: "Men T-Shirt", category: "Clothing", price: 799, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.SAEHv-JSa7p8FJHvMCyBTQHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Men Jeans", category: "Clothing", price: 1499, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.kUnwpikrMxLC5DygHW_5EgHaJ3?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Women Dress", category: "Clothing", price: 1999, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.qX-htUiJUP6T6KCsWGQ4AQHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Jacket", category: "Clothing", price: 2499, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.s2-WlmPb1uvim_ZBJiZ77gHaE7?w=276&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Hoodie", category: "Clothing", price: 1299, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.aYB6EMdrqLvQw-jTJU2v0QHaEO?w=330&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Shorts", category: "Clothing", price: 699, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.mr9QxEQjMNS3SdVOJ7pqEwHaHa?w=190&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Formal Shirt", category: "Clothing", price: 1199, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.w-ApaB3o_djY_WYMsLCgSwHaJ4?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Skirt", category: "Clothing", price: 899, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.dc3Ti1YuQJnDCz6BqhO2OgHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Sweater", category: "Clothing", price: 1399, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.ycEB-FVuWP7mNT6T_PMZdAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Track Pants", category: "Clothing", price: 999, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.RueeS7GgEQIIdgpal9WmKQHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

//   // Home & Kitchen
//   { name: "Pressure Cooker", category: "Home & Kitchen", price: 2500, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.e5dwKBfMI1CoP6cq__m45wHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Frying Pan", category: "Home & Kitchen", price: 900, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.xTDxh0vn-tMQNbMEzYF_3gHaC5?w=320&h=136&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Knife Set", category: "Home & Kitchen", price: 1200, unit: "1 set", image: "https://th.bing.com/th/id/OIP.6ikOWObPsqMWnBQuIQr48AHaHC?w=218&h=207&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Dining Plates", category: "Home & Kitchen", price: 1500, unit: "1 set", image: "https://th.bing.com/th/id/OIP.NKo06HCwt44hvQ_d1NhOVQHaEL?w=273&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Water Bottle", category: "Home & Kitchen", price: 400, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.nAqZhIyBzaiLaPB39S5cgAHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Mixer Grinder", category: "Home & Kitchen", price: 4500, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.XDwHiOxFdwfR2UEYXJVNeAHaHa?w=268&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Electric Kettle", category: "Home & Kitchen", price: 1600, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.6xv2w7iEof1F2QwQPpHq3QAAAA?w=154&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Storage Containers", category: "Home & Kitchen", price: 1100, unit: "1 set", image: "https://th.bing.com/th/id/OIP.0YjXXRWNXyLgdQQpNNLRhwHaHa?w=195&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Non Stick Tawa", category: "Home & Kitchen", price: 800, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.NXvy2yRzw36o4JrH8WqH7QHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Lunch Box", category: "Home & Kitchen", price: 600, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.vSkEHrIaF7rZsHTRPQaUXwHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

//   // Books
//   { name: "Rich Dad Poor Dad", category: "Books", price: 399, unit: "1 book", image: "https://th.bing.com/th/id/OIP.mt5l4FNd2nIWixFXXuaRkQHaLJ?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Atomic Habits", category: "Books", price: 499, unit: "1 book", image: "https://th.bing.com/th/id/OIP.yxeJ4ekIJctvMNzkCeTQFQHaFj?w=260&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "The Alchemist", category: "Books", price: 350, unit: "1 book", image: "https://th.bing.com/th/id/OIP._Z09kGkAdrMKJsz-Zu4LJwHaKj?w=186&h=265&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Deep Work", category: "Books", price: 420, unit: "1 book", image: "https://th.bing.com/th/id/OIP.Gpol5Hi-NHsqbGxs9GJgpAHaHa?w=193&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Ikigai", category: "Books", price: 380, unit: "1 book", image: "https://th.bing.com/th/id/OIP.4ATDBpU8JvveTg8Bu-hBiQHaHa?w=161&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Think and Grow Rich", category: "Books", price: 300, unit: "1 book", image: "https://th.bing.com/th/id/OIP.5OE_jd2afzUAexxKfB-bkAHaMl?w=186&h=316&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Start With Why", category: "Books", price: 450, unit: "1 book", image: "https://th.bing.com/th/id/OIP.NTFwyhXlflB6CsfT2kL7_gHaD2?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Psychology of Money", category: "Books", price: 480, unit: "1 book", image: "https://th.bing.com/th/id/OIP.y2bBd9KOm_c5xYpqc0hvcwHaE8?w=294&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Zero to One", category: "Books", price: 410, unit: "1 book", image: "https://th.bing.com/th/id/OIP.rGn5FE_zaDFkARTefrAVawHaFj?w=200&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Clean Code", category: "Books", price: 650, unit: "1 book", image: "https://th.bing.com/th/id/OIP.RCDZNS6BBO1pZ0dfycDxogHaD4?w=308&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

//   // Sports & Outdoors
//   { name: "Football", category: "Sports & Outdoors", price: 900, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.05WojXz0DTr5eWPH1gjErAHaE8?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Cricket Bat", category: "Sports & Outdoors", price: 1800, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.lHq8ePWlJqjJhW_T1Zo8vQHaQB?w=161&h=349&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Badminton Racket", category: "Sports & Outdoors", price: 1200, unit: "pair", image: "https://th.bing.com/th/id/OIP.4vMiQQaZE-ZLBa_opLvYxQAAAA?w=206&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Tennis Ball Set", category: "Sports & Outdoors", price: 400, unit: "3 pcs", image: "https://th.bing.com/th/id/OIP.pZocWs54De7NrylG9MVMhwHaHa?w=163&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Yoga Mat", category: "Sports & Outdoors", price: 700, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.5h2H8WmIodRhFNx9d45DGAHaFT?w=253&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Dumbbells", category: "Sports & Outdoors", price: 1500, unit: "pair", image: "https://th.bing.com/th/id/OIP.pPtEnPvknSYbr-29HCoEFAHaE7?w=261&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Skipping Rope", category: "Sports & Outdoors", price: 300, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.qYG435qt-NS5sNcAfPF5uAHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Camping Tent", category: "Sports & Outdoors", price: 3500, unit: "1 pc", image: "https://th.bing.com/th?q=Camping+Tent+White+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
//   { name: "Cycling Helmet", category: "Sports & Outdoors", price: 1300, unit: "1 pc", image: "https://th.bing.com/th/id/OIP.FdHia0KnWIH8-7u7F4iZyQHaH0?w=181&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { name: "Sports Gloves", category: "Sports & Outdoors", price: 500, unit: "pair", image: "https://th.bing.com/th/id/OIP.kb1boaSWvaX7NHeqSxBX7AHaE7?w=264&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },

// ];

// async function uploadProducts(){
//   try{
//     for(const product of products){
//       await addDoc(collection(db,"Items"),product)
//       // console.log("Added:"product.name)
//     }
//       alert("Products uploaded successfully")
//   }catch(error) {
//       console.log(error)
//     }
// }
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-6">

//       <h1 className="text-3xl font-bold">
//         Upload Products to Firestore
//       </h1>

//       <button
//         onClick={uploadProducts}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg"
//       >
//         Upload Products
//       </button>

//     </div>
//   )}