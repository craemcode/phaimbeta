import React from 'react'
import CartItem from './CartItem'

export default function SalesCart(props) {
    const products = props.cartItems
    




  return (
    <aside>
        <h3 className='font-bold mb-5 '>Sales Cart</h3>
    {
    Object.keys(products).length ?
        products.map((product)=> (
           <CartItem product={product}>

           </CartItem>
        )
        )
            :
            <p>No products in the cart</p>
            }
   
    </aside>
  )
}
