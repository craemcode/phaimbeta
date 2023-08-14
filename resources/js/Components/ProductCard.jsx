import React from 'react'

function ProductCard({sold_products}) {
  
  
  
  
  
  
  
  
    return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    {
    sold_products.map((product)=>(
        <div key={product.id}>
            <span>
              Product ID:  {product.product_id}
            </span>
            <span className='ml-2'>
               Quantity sold: {product.product_quantity}
            </span>

        </div>
    ))
    }



    </div>
  )
}

export default ProductCard