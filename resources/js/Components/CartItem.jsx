import React,  { useState } from 'react'

export default function CartItem({product,onRemove,updateTotal}) {
    const [cartObject,setQuantity] = useState(product)
    updateTotal()


    const updateqty = (event)=>{
      const value = event.target.value
      
      //if user places something greater than the cart the value will automatically go to the maximum
      if (value > product.amount){
        product.qty = product.amount
        setQuantity((prevObject)=>(
          {...prevObject, qty: product.amount}
        ))
      }else if(value==0){
        product.qty = 1
        setQuantity((prevObject)=>(
          {...prevObject, qty: value}
        ))
        
      }else if(value>0){//the input will not accept zero figures
        product.qty = value
        setQuantity((prevObject)=>(
          {...prevObject, qty: value}
        ))
      }  
      
    }
      
      
  return (
    <div className="border-b mb-2 ">
        <div className='flex justify-between'>
         
          <span className='text-md'>
          {cartObject.name}
          </span>
          <button onClick={()=>onRemove(cartObject)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:text-red-500 transition">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

          </button>
        </div>
        <div className='text-sm'>
            <span className='font-bold text-lg'>{cartObject.qty}</span> {cartObject.units} 
            <span>
                <input 
                name='qty'
                value={cartObject.qty}
                onChange={updateqty}
                className=" px-4  text-black-700  bg-inherit h-8 border-0 bg-slate-200 rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                type="number" 
                placeholder='Quantity to sell'
                />
            </span>
          </div>
        <div className=' mt-4'>Ksh. <span className='font-bold text-lg'>{cartObject.selling_price * cartObject.qty}</span></div>
    {console.log(product)}
</div>
  )
}
