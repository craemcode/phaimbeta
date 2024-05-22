
//this page shows all the products in the table..similar interface to the products dashboard.

import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductLayout from "@/Layouts/ProductLayout";
import { Head, usePage } from "@inertiajs/react";
import StockTable from "@/Components/StockTable";
import RestockCart from "@/Components/RestockCart";
import { Link } from '@inertiajs/react';


export default function RestockDashboard(props) {
    
    const { stock, flash, products } = usePage().props;
    const [cartItems, setCartItems] = useState([]);
    //function for adding to cart
    const onAdd = (product) => {
        const verdict = 'product_id' in product
        
        if (verdict){
            const exist = cartItems.find(x => x.product_id === product.product_id);
            // 
            if (exist) {
                setCartItems((x) =>
                    [...x.map(item => item.product_id === product.product_id ? { ...item, qty: parseInt(parseInt(item.qty) + 1) } : item)])


            } else {
                setCartItems([...cartItems, { ...product, qty: 1 }])
            }
        }else{
                const exist = cartItems.find(x => x.id === product.id);
                // 
                if (exist) {
                    setCartItems((x) =>
                        [...x.map(item => item.id === product.id ? { ...item, qty: parseInt(parseInt(item.qty) + 1) } : item)])
    
    
                } else {
                    setCartItems([...cartItems, { ...product, qty: 1 }])
                } 
            }
    }

    //function for removing items from the cart
    const onRemove = (product) => {
        //find cart item with matching id
        const item = cartItems.find((x) => x.id === product.id)
        setCartItems(cartItems.filter((x) => x.id !== product.id))
    }
    

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard:{`${stock.name}`}
                </h2>
            }
        >
            <Head title={stock.name} />

            <ProductLayout stock={stock} flash={flash}>

                <div className="flex items-start justify-between">

                    <div className="pt-5 w-3/4 p-6 ">
                        <div className='flex  justify-between px-4 py-1'>
                            <Link
                                href={route("products.show_products_only",stock.id)}
                                as="button"
                                method="get"
                                preserveState={false}
                                className="bg-black font-bold rounded-md p-2 mt-2 text-gray-200"
                            >
                                Show Products
                            </Link>
                            <Link
                                href={route("product.products_in_stock",stock.id)}
                                as="button"
                                method="get"
                                preserveState={false}
                                className="bg-black font-bold rounded-sm p-2 mt-2 text-gray-200"
                            >
                                Show Stocked Products
                            </Link>
                        </div>

                        {
                            Object.keys(products).length ?
                                <StockTable products={products} stock_id={stock.id} onAdd={onAdd}>

                                </StockTable> :

                                <p className="text-center mx-auto w-fit p-4 text-yellow-900 rounded-md bg-yellow-100 shadow border border-yellow-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2 mb-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>

                                    No products to show
                                </p>
                        }
                    </div>
                    <div className=" bg-gray-100 shadow-md border rounded-md self-stretch mx-4 px-4 w-1/4">
                        <RestockCart onRemove={onRemove} cartItems={cartItems} setCartItems={setCartItems}>

                        </RestockCart>
                    </div>
                </div>
            </ProductLayout>
        </AuthenticatedLayout>
    );
}