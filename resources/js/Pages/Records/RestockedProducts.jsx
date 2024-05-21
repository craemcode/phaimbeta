import React from 'react'
import RestockedProductCard from '@/Components/RestockedProductCard'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function RestockedProducts(props) {
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
    <div className=" h-screen flex justify-evenly bg-[url('/img/protruding-squares.svg')]">
        <div className=''>
            <RestockedProductCard restocked_products={props.restocked_products} user={props.auth.user} restock={props.restock} stock_id={props.stock.id}/> 
        </div>

        </div>
        </AuthenticatedLayout>
  )
}
