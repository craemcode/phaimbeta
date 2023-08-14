import ProductCard from '@/Components/ProductCard'
import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Sold_products(props) {
  
    return (
    <AuthenticatedLayout
    user={props.auth.user}
    errors={props.errors}
    header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Dashboard:{`${props.stock.name}`}
        </h2>
    }
>
    <Head title={props.stock.name} />
    <div>
        <ProductCard sold_products={props.sold_products} stock_id={props.stock.id}/>
    </div>
    </AuthenticatedLayout>
  )
}
