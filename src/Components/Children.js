import React from 'react'
import { useState } from 'react'
import Product from "./Product"
import "./Pages.css"


function Children(props) {
    const {products,onAdd}=props
    const [searchTerm,setSearchTerm]=useState("")
    const found=products.filter(val=>{return val.category=="children"})
  return (<>
  <input autoFocus id='inputsearch' type="text" placeholder="Search..." onChange={event=>{setSearchTerm(event.target.value)}}/>
        <h2 className='titles'>Children's</h2>
    <div className='sc'>
            {found.filter((val)=>{
            if(searchTerm==""){return val}
            else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ||val.author.toLowerCase().includes(searchTerm.toLowerCase())){return val}
         }).map((product)=>(<Product key={product.id} product={product} onAdd={onAdd}/>))}
        
    </div>
    </>)
}

export default Children