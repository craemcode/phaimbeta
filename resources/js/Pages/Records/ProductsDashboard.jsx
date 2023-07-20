import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductLayout from "@/Layouts/ProductLayout";
import { Head, usePage } from "@inertiajs/react";
import StockTable from "@/Components/StockTable";

export default function ProductsDashboard(props) {
    const { stock, flash, products } = usePage().props;

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
            
                <div className="flex flex-col items-center ">

                    <div className="pt-10">
                        
                        {
                    Object.keys(products).length ?
                        <StockTable products={products} stock_id={stock.id}>
                            
                        </StockTable>:
                        <p>No products to show</p>
                        }
                    </div>
                </div>
            </ProductLayout>
        </AuthenticatedLayout>
    );
}
