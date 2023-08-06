import React, { useState } from 'react'
import CartItem from './CartItem'

export default function SalesCart(props) {
    const products = props.cartItems
    const [total, setTotal] = useState(0)




  return (
    <aside>
        
        <div className='flex flex-col justify-between '>
          <div className='grow'>
              <h3 className='font-bold mb-5 '>Sales Cart</h3>
              {
              Object.keys(products).length ?
                products.map((product)=> (
                <CartItem key={props.key} product={product} onRemove={props.onRemove}>

                </CartItem>
                    )
                    )
                      :
                <p>No products in the cart</p>
                }
          </div>
        
          <div>
            Total Sales: {total}
          </div>
        </div>
    
   
    </aside>
  )
}
