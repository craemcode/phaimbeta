import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import ProductLayout from '@/Layouts/ProductLayout'
import { Head, usePage } from '@inertiajs/react'

export default function ProductsDashboard(props) {
    const { stock, flash} = usePage().props
  
  
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
      <Head title={stock.name}/> 

      <ProductLayout stock={stock} flash={flash}>

        my products
        

        
        
        
        
        
        
    </ProductLayout> 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </AuthenticatedLayout>
  )
}

