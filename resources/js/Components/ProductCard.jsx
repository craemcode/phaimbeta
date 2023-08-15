import React from 'react'

function ProductCard({sold_products,sale,user}) {
  
  const sale_date = new Date(sale.created_at)

  
  const total = sold_products.reduce((accumulator, current)=> accumulator+current.product_selling_price*current.product_quantity,0)
  
  
  
  
    return (
    <div className=" px-5 py-5 my-8 bg-white border border-gray-200 rounded-lg shadow">
       <p className='mb-3 p-3 shadow-lg rounded-lg bg-blue-800 text-white'>Sale : <span className='font-bold'>{sale.id}</span> <br/> 
                            By <span className='font-bold'>{user.name}</span> 
                            <br /> on  <span className='font-bold'> {sale_date.toDateString()} </span>
                            <br /> at  <span className='font-bold'>{sale_date.toLocaleTimeString()}</span>
      </p>
    {
    sold_products.map((product)=>(
        <div key={product.id} className='border-b mb-2'>
            <div className='font-bold'>
                {product.name}
            </div>
           
            <div className=''>
                
               <span className='font-bold text-lg'>{product.product_quantity} </span> <span className='text-sm'>{product.units}</span>
            </div>
            <div className=''>
                 <span className='text-sm'>Ksh.</span> 
               <span className='font-bold text-lg ml-1'>{product.product_quantity * product.product_selling_price}</span>
            </div>
            
        </div>
    ))
    }
            <div className='bg-blue-800 shadow-md rounded-lg text-white px-3 py-1'>
              <span className='text-lg font-bold'>Total Sale:</span> <span className='text-sm'>Ksh. </span><span className='font-bold text-lg'>{total.toLocaleString('en-us')}</span>
            </div>


    </div>
  )
}

export default ProductCard