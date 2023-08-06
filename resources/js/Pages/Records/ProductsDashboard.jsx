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

    //function for removing items from the cart
    const onRemove = (product)=>{
        //find cart item with matching id
        const item = cartItems.find((x)=>x.id===product.id)
        setCartItems(cartItems.filter((x)=>x.id !== product.id))
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

                    <div className="pt-5 w-3/4">
                        
                        {
                    Object.keys(products).length ?
                        <StockTable products={products} stock_id={stock.id} onAdd={onAdd}>
                            
                        </StockTable>:
                        <p>No products to show</p>
                        }
                    </div>
                    <div className="shadow-md border rounded-md self-stretch mr-4 px-4 w-1/4">
                        <SalesCart onRemove={onRemove} cartItems = {cartItems}>

                        </SalesCart>
                    </div>
                </div>
            </ProductLayout>
        </AuthenticatedLayout>
    );
}
