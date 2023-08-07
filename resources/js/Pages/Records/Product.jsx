import React from 'react'
import { Head, usePage } from "@inertiajs/react";
import ProductLayout from '@/Layouts/ProductLayout';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import ProductCard from '@/Components/ProductCard';
import SalesCart from '@/Components/SalesCart';



function Product(props) {
  
    const { stock, flash, product } = usePage().props;
  
  
    return (
        <AuthenticatedLayout
        user={props.auth.user}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard:{`${stock.name}`}
                </h2>
        }
        >
        <Head title={product.name}/>
        
        <ProductLayout stock={stock} flash={flash}>
            
            <div className="flex flex-col items-center ">

                <div className="pt-10 w-80">
                   <ProductCard product={product}
                   
                   />
                 
                </div>
                
            </div>
        </ProductLayout>
    </AuthenticatedLayout>
  )
}

export default Product