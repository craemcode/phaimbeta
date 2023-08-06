import React,  { useState } from 'react'

export default function CartItem({product,onRemove}) {
    const [quantity,setQuantity] = useState(1)

  return (
    <div key={product.id} className="border-b ">
        <div className='flex justify-between'>
         
          {product.name}
          <button onClick={()=>onRemove(product)}>
            X
          </button>
        </div>
        <div>
            {quantity} {product.units} 
            <span>
                <input 
                onChange={e=>setQuantity(e.target.value)}
                className="w-1/8 ml-3 px-4 py-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                type="numeric" 
                placeholder='Quantity to sell'
                />
            </span>
        </div>
        <div>Ksh. {product.selling_price * quantity}</div>

</div>
  )
}
