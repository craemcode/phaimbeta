import React, { useState } from 'react'
import RestockCartItem from './RestockCartItem'
import { Link } from '@inertiajs/react'

export default function RestockCart(props) {
    const products = props.cartItems
    const total = products.reduce((accumulator, current)=> accumulator+current.buying_price*current.qty,0)
    const [totalRestock,setTotalRestock] = useState(total)
  
    //update total for the salescart
    const updateTotal = ()=>{
      let localtot =products.reduce((accumulator, current)=> accumulator+current.buying_price*current.qty,0)
      setTotalRestock(localtot)
    }
      
    const create_batch_no_property = (product)=>{
        Object.defineProperty(product, 'batch_no', {
            value: 0
          })
    }
  
  
    return (
        <aside>
            <div className="flex flex-col justify-between pt-2 pb-4">
                <div className="grow">
                    <h3 className="font-bold text-lg mb-5 ">Restock Cart</h3>
                    {Object.keys(products).length ? (
                        products.map((product) => (
                            
                            <div key={product.id}>
                                {create_batch_no_property(product)}
                                <RestockCartItem
                                    product={product}
                                    updateTotal={updateTotal}
                                    onRemove={props.onRemove}
                                ></RestockCartItem>
                            </div>
                        ))
                    ) : (
                        <p className="text-center mb-4 mx-auto text-sm w-fit p-2 text-yellow-900 rounded-md bg-yellow-100 shadow border border-yellow-800">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 inline mr-2 mb-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                />
                            </svg>
                            No products in the cart
                        </p>
                    )}
                </div>
                {products.length ? (
                    <div className="flex flex-col">
                        <div className="my-3">
                            Total Restock: Ksh.{" "}
                            <span className="font-bold text-lg">
                                {totalRestock}
                            </span>
                        </div>
                        <Link
                            href={route("products.restock")}
                            as="button"
                            method="post"
                            preserveState={false}
                            data={products}
                            className="bg-blue-700 font-bold rounded-sm p-2 mt-2 text-white"
                        >
                            Make Restock
                        </Link>
                    </div>
                ) : (
                    <p className="text-center flex mx-auto text-sm w-fit p-2 text-blue-900 rounded-md bg-blue-100 shadow border border-blue-800">
                        <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 inline mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                            />
                        </svg>
                        </div>
                        <div>
                          Add products to the cart by clicking them
                        </div>
                        
                        
                    </p>
                )}
            </div>
        </aside>
    );
  }