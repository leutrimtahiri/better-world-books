import React from 'react'
import { useState } from 'react'
import Product from "./Product"
import "./Search.css"


function Search(props) {
    const {products,onAdd}=props
    const [searchTerm,setSearchTerm]=useState("")
  return (<>
   <input autoFocus id='searchsearch' type="text" placeholder="Search..." onChange={event=>{setSearchTerm(event.target.value)}}/>

    <div className='sc'>
        
        
            {products.filter((val)=>{
            if(searchTerm==""){return val}
            else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ||val.author.toLowerCase().includes(searchTerm.toLowerCase())){return val}
         }).map((product)=>(<Product key={product.id} product={product} onAdd={onAdd}/>))}
        
    </div>
    
    </>)
}

export default Search