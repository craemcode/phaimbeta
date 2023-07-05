import React from 'react'
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
//import LabeledInput from "@/Components/LabeledInput";


export default function Add_Stock(props) {
  
  //useless
  
    return (
        
        <AuthenticatedLayout
            user = {props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Stocks Dashboard</h2>}

        >
        <div className="py-12">
            Add a stock
        </div>
        
        
        
        
        </AuthenticatedLayout>
      
      
  )
}

