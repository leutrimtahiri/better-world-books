import React from 'react'

function Basket(props) {
  const {cartItems, onAdd,onRemove}=props
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (<div className='cartitems'>
    <div >
      <h2>Cart Items</h2>
      <div>
        {cartItems.length===0&&<div>Cart is Empty</div>}
      </div>
      {cartItems.map((item)=>(
        <div key={item.id} >
          <div>{item.title}</div>
          <div>
            <button onClick={()=>onAdd(item)} className="add">+</button>
            <button onClick={()=>onRemove(item)} className="remove">-</button>
            <div>
            {item.qty}x${item.price.toFixed(2)}
          </div>
          </div>
          
          
        </div>
      ))}
    </div>
    <div>
                <strong>= ${itemsPrice.toFixed(2)}</strong>
              </div>
    </div>
  )
}

export default Basket