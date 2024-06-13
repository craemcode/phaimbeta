import React from 'react'

export default function RestockedProductCard({restocked_products,restock,user}) {
  
  //date of the restock
  const restock_date = new Date(restock.created_at)
  const total = restocked_products.reduce((accumulator,current)=>accumulator+current.buying_price*current.restocked_quantity,0)
  
  
  
    return (
    <div  className=" px-5 py-5 my-8 bg-white border border-gray-200 rounded-lg shadow" >
        <p className='mb-3 p-3 shadow-lg rounded-lg bg-blue-800 text-white'>Restock : <span className='font-bold'>{restock.id}</span> <br/> 
                            By <span className='text-lg'>{user.name}</span> 
                            <br /> on  <span className=''> {restock_date.toDateString()} </span>
                            <br /> at  <span className='font-bold'>{restock_date.toLocaleTimeString()}</span>
      </p>
    {
        restocked_products.map((product)=>(
            <div key={product.id} className='border-b mb-2'>
                <div className='text-lg'>
                    {product.name}
                </div>

                <div className=''>
                
                <span className='text-sm'>Batch No.</span> <span className='font-bold text-lg'>{product.batch_number} </span> 
                </div>

                <div className=''>

                    <span className='font-bold text-lg'>{product.restocked_quantity} </span> <span className='text-sm'>{product.units}</span>
                </div>
                <div className=''>
                    <span className='text-sm'>Ksh.</span>
                    <span className='font-bold text-lg ml-1'>{(product.quantity * product.buying_price).toLocaleString()}</span>

                </div>
            </div>
        ))

    }
            <div className='bg-blue-800 shadow-md rounded-lg text-white px-3 py-1'>
                <span className='text-lg font-bold'>Total Restock Spend:</span> <span className='text-sm'>Ksh. </span><span className='font-bold text-lg'>{total.toLocaleString('en-us')}</span>
            </div>



    </div>
  )
}
