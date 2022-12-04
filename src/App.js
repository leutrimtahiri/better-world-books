import data from "./data";
import {useState} from "react"
import Search from "./Components/Search";
import {BrowserRouter as Router, Routes, Route }from "react-router-dom"
import Children from "./Components/Children";
import History from "./Components/History";
import Home from "./Components/Home";
import Top from "./Components/Top";
import Basket from "./Components/Basket";
import "./App.css"



function App() {
  const {products}=data;
const [cartItems,setCartItems]=useState([])
const onAdd=(product)=>{
  const exist=cartItems.find(x=>x.id===product.id)
  if(exist){
    setCartItems(cartItems.map(x=>x.id===product.id?{...exist, qty:exist.qty+1}:x))
  }
  else{setCartItems([...cartItems,{...product,qty:1}])}
}  
const onRemove =(product)=>{
  const exist=cartItems.find((x)=>x.id===product.id)
  if(exist.qty===1){
    setCartItems(cartItems.filter((x)=>x.id!==product.id))
  }else{setCartItems(cartItems.map((x)=>x.id===product.id?{...exist, qty:exist.qty- 1}:x))

  }
}
  return (
    <div className="App">
      
      <Router basename={window.location.pathname || ''}>
        
      <div id="Top"><Top countCartItems={cartItems.length}/></div>
      <div id="basket"><Basket onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}/></div>
      <div id="Routes"> 
      <Routes>
        
      <Route path="" element={<Home onAdd={onAdd} products={products}/>}/>
     <Route path="/search" element={<Search onAdd={onAdd} products={products}/>}/>
     
     <Route path="/children" element={<Children  onAdd={onAdd} products={products} />}/>
     <Route path="/history" element={<History  onAdd={onAdd} products={products}/>}/>
     
     </Routes>
     
     </div>
     
     
     </Router>
     
    </div>
  );
}

export default App;
