import React from 'react'
import TransactionsTable from '@/Components/TransactionsTable'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductLayout from "@/Layouts/ProductLayout";
import { Head } from "@inertiajs/react";


export default function Restocks(props) {
    const restocks = props.restocks
    const stock = props.stock
    const link = 'restock.show'

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
        <Head title={props.stock.name}/>
        <ProductLayout stock={stock} stock_id={stock.id} flash={props.flash}>
            <TransactionsTable transactions={restocks} stock_id={stock.id} link={link}/>
        </ProductLayout>
    </AuthenticatedLayout>
  )
}
