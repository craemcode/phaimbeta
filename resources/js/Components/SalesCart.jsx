import React, { useState } from 'react'
import CartItem from './CartItem'
import { Link } from '@inertiajs/react'

export default function SalesCart(props) {
  const products = props.cartItems
  const total = products.reduce((accumulator, current)=> accumulator+current.selling_price*current.qty,0)
  const [totalSales,setTotalSales] = useState(total)

  //update total for the salescart
  const updateTotal = ()=>{
    let localtot =products.reduce((accumulator, current)=> accumulator+current.selling_price*current.qty,0)
    setTotalSales(localtot)
  }
    
  


  return (
    <aside>
        
        <div className='flex flex-col justify-between'>
          <div className='grow'>
              <h3 className='font-bold text-lg mb-5 '>Sales Cart</h3>
              {
              Object.keys(products).length ?
                products.map((product)=> (
                  <div key={product.id}>
                      <CartItem  product={product} updateTotal={updateTotal} onRemove={props.onRemove}>

                      </CartItem>
                  </div>
                
                    )
                    )
                      :
                <p className='font-bold mb-5'>No products in the cart</p>
                }
          </div>
             {
                products.length? 
                <div className='flex flex-col'>
                    <div className='my-3'>
                      Total Sale: Ksh. <span className='font-bold text-lg'>{totalSales}</span>
                    </div>
                    <Link href={route('products.sell')} as='button' method="post" data={products} className='bg-green-800 rounded-sm p-2 mt-2 text-white'>
                      MAKE SALE
                    </Link>
                </div>
                :"Add products to the cart by clicking them."
             }   
          
        </div>
    
   
    </aside>
  )
}
