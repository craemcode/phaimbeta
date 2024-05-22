import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductLayout from "@/Layouts/ProductLayout";
import { Head, usePage } from "@inertiajs/react";
import StockTable from "@/Components/StockTable";
import SalesCart from "@/Components/SalesCart";

export default function ProductsDashboard(props) {
    const { stock, flash, products } = usePage().props;
    const [cartItems, setCartItems] = useState([]);
    //function for adding to cart
    
    const onAdd = (product) => {
        const exist = cartItems.find(x=>x.id === product.id);
        // 
        if (exist){
            setCartItems((x)=>
                [...x.map(item=> x.id === product.id ? {...item, qty: parseInt(parseInt(item.qty) + 1)}: item )])

            
        }else{
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }
    
    //function for removing items from the cart
    const onRemove = (product)=>{
        //find cart item with matching id
        const item = cartItems.find((x)=>x.id===product.id)
        setCartItems(cartItems.filter((x)=>  x.id !== product.id))
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

                    <div className="pt-5 w-3/4 p-6">
                        
                        {
                    Object.keys(products).length ?
                        <StockTable products={products} stock_id={stock.id} onAdd={onAdd}>
                            
                        </StockTable>:
                        
                        <p className="text-center mx-auto w-fit p-4 text-yellow-900 rounded-md bg-yellow-100 shadow border border-yellow-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2 mb-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>

                            No products to show
                        </p>
                        }
                    </div>
                    <div className=" bg-gray-100 shadow-md border rounded-md self-stretch mx-4 px-4 w-1/4">
                        <SalesCart onRemove={onRemove} cartItems = {cartItems} setCartItems={setCartItems}>

                        </SalesCart>
                    </div>
                </div>
            </ProductLayout>
        </AuthenticatedLayout>
    );
}
