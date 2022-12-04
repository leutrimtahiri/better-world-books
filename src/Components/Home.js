import React from 'react'
import { useState } from 'react'
import Product from "./Product"
import "../Components/Home.css"


function Home(props) {
    const {products,onAdd}=props
    
    let [i,seti]=useState(Math.floor(Math.random() * products.length))
    
    let found=products.slice(i,(+i+4)%products.length)
    let found2=products.slice(+i+5,(+i+9)%products.length)
  return (
    <div className='home'>
        <h1 className='titles'>Best Sellers</h1>
        <div className='card'>
            {found.map((product)=>(<Product key={product.id} product={product} onAdd={onAdd}/>))}
        </div>
        <h1 className='titles'>Top 500</h1>
        <div className='card'>
            {found2.map((product)=>(<Product key={product.id} product={product} onAdd={onAdd}/>))}
        </div>
    </div>
  )
}

export default Home