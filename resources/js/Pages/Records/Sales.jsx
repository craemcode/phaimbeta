import SalesTable from '@/Components/SalesTable'
import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductLayout from "@/Layouts/ProductLayout";
import { Head } from "@inertiajs/react";

export default function Sales(props) {
    const sales = props.sales
    const stock = props.stock
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
    <ProductLayout stock={stock} flash={props.flash}>
          <SalesTable sales={sales} stock_id={stock.id}/>
    </ProductLayout>
    </AuthenticatedLayout>
  )
}
//remeber to have the sales object reflect this....