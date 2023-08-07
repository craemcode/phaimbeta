import React,  { useState } from 'react'

export default function CartItem({product,onRemove,updateTotal}) {
    const [cartObject,setQuantity] = useState(product)
    updateTotal()


    const updateqty = (event)=>{
      const value = event.target.value
      
      //inefective method!. Will only work if another object is added to the cart
      product.qty = value
      

      setQuantity((prevObject)=>(
        {...prevObject, qty: value}
      ))
      
    }
      
      
  return (
    <div className="border-b mb-2 ">
        <div className='flex justify-between'>
         
          <span className='font-bold'>
          {cartObject.name}
          </span>
          <button onClick={()=>onRemove(cartObject)}>
            X
          </button>
        </div>
        <div className='text-sm'>
            <span className='font-bold text-lg'>{cartObject.qty}</span> {cartObject.units} 
            <span>
                <input 
                name='qty'
                value={cartObject.qty}
                onChange={updateqty}
                className="w-1/8 px-4 py-2 block text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                type="numeric" 
                placeholder='Quantity to sell'
                />
            </span>
          </div>
        <div className=' mt-4'>Ksh. <span className='font-bold text-lg'>{cartObject.selling_price * cartObject.qty}</span></div>

</div>
  )
}
