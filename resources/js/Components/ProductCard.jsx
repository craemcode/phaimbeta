import React from 'react'

function ProductCard({sold_products,sale,user}) {
  
  const sale_date = new Date(sale.created_at)

  
  
  
  
  
  
    return (
    <div className=" px-5 py-5 my-8 bg-white border border-gray-200 rounded-lg shadow">
       <p className='mb-3 '>Sale id: <span className='font-bold'>{sale.id}</span> <br/> 
                            By user: <span className='font-bold'>{user.name}</span> 
                            <br /> on date: <span className='font-bold'> {sale_date.toDateString()} </span>
                            <br /> at time: <span className='font-bold'>{sale_date.toLocaleTimeString()}</span>
      </p>
    {
    sold_products.map((product)=>(
        <div key={product.id} className='border-b mb-2'>
            <div className='font-bold'>
                {product.name}
            </div>
           
            <div className=''>
               Quantity sold: 
               <span className='font-bold text-lg ml-1'>{product.product_quantity}</span>
            </div>

        </div>
    ))
    }



    </div>
  )
}

export default ProductCard