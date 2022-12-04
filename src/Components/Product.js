import React from 'react'

import "./Product.css"


function Product(props) {
    const { onAdd,product}=props
  return (
    
    <div className='product'>
        <img src={product.image}/>
        <h1>{product.title}</h1>
        <h5>{product.author}</h5>
        <h1>${product.price}</h1>
        
        <button onClick={()=>onAdd(product)}>Add to Cart</button>
    </div>
    
  )
}

export default Product