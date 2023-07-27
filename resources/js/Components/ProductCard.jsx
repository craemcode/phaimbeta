import React from 'react'

function ProductCard({product}) {
  
  
  
  
  
  
  
  
    return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <div class="flex justify-end px-4 pt-4">
        ...
    </div>
    <div class="flex flex-col items-center pb-10">
        <h5 class="mb-1 text-xl font-bold text-green-800">{product.name}</h5>
        <h4 class="mb-1 text-xl font-medium ">{product.units}</h4>
        <span class="text-sm ">Product Selling price: {product.selling_price}</span>
        <span class="text-sm ">Amount in stock: {product.amount}</span>
        <div class="flex gap-20 mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 border rounded-lg hover:bg-white hover:text-blue-700">Sell</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-800 border hover:bg-white rounded-lg hover:text-green-800">Restock</a>
        </div>
    </div>
</div>
  )
}

export default ProductCard