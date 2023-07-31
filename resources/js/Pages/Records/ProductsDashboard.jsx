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
        
        if (exist){
            setCartItems.map((x)=>
                x.id === product.id ? {...exist,qty: exist.qty+1}: x

            )
        }else{
            setCartItems([...cartItems, {...product, qty: 1}])
        }
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
            
                <div className="flex items-start ">

                    <div className="pt-10">
                        
                        {
                    Object.keys(products).length ?
                        <StockTable products={products} stock_id={stock.id} onAdd={onAdd}>
                            
                        </StockTable>:
                        <p>No products to show</p>
                        }
                    </div>
                    <div className="shadow-md border ml-4 grow">
                        <SalesCart cartItems = {cartItems}>

                        </SalesCart>
                    </div>
                </div>
            </ProductLayout>
        </AuthenticatedLayout>
    );
}
