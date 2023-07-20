import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductLayout from "@/Layouts/ProductLayout";
import SearchBar from "@/Components/SearchBar";
import ProductCard from "@/Components/ProductCard";
import { Head, usePage } from "@inertiajs/react";

export default function ProductsDashboard(props) {
    const { stock, flash } = usePage().props;

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

                    <div className="pb-10">
                        <SearchBar></SearchBar>
                    </div>
                    <div className="pt-10">
                        <ProductCard>
                            
                        </ProductCard>
                    </div>
                </div>
            </ProductLayout>
        </AuthenticatedLayout>
    );
}
