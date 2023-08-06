import React,  { useState } from 'react'

export default function CartItem({product,onRemove}) {
    const [cartObject,setQuantity] = useState(product)

    const updateqty = (event)=>{
      const value = event.target.value
      
      //inefective method!. Will only work if another object is added to the cart
      product.qty = value

      setQuantity((prevObject)=>(
        {...prevObject, qty: value}
      ))
      
    }
      
      
  return (
    <div className="border-b ">
        <div className='flex justify-between'>
         
          {cartObject.name}
          <button onClick={()=>onRemove(cartObject)}>
            X
          </button>
        </div>
        <div>
            {cartObject.qty} {cartObject.units} 
            <span>
                <input 
                name='qty'
                value={cartObject.qty}
                onChange={updateqty}
                className="w-1/8 ml-3 px-4 py-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                type="numeric" 
                placeholder='Quantity to sell'
                />
            </span>
          </div>
        <div>Ksh. {cartObject.selling_price * cartObject.qty}</div>

</div>
  )
}
