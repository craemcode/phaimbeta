import React, { useState } from 'react'
import CartItem from './CartItem'

export default function SalesCart(props) {
  const products = props.cartItems
  //const total = 
  const [totalSales,setTotalSales] = useState(()=>{products.reduce((accumulator, current)=> accumulator+current.selling_price*current.qty,0)})

  //update total for the salescart
  const updateTotal = ()=>{
    let localtot =products.reduce((accumulator, current)=> accumulator+current.selling_price*current.qty,0)
    setTotalSales(localtot)
  }
    



  return (
    <aside>
        
        <div className='flex flex-col justify-between '>
          <div className='grow'>
              <h3 className='font-bold mb-5 '>Sales Cart</h3>
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
                <p>No products in the cart</p>
                }
          </div>
                
          <div>
            Total Sales: Ksh. <span className='font-bold text-lg'>{products.length? totalSales:0}</span>
          </div>
        </div>
    
   
    </aside>
  )
}
