import React from 'react'
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
//import LabeledInput from "@/Components/LabeledInput";

function CreateProduct(props) {
  
  //use form hook
  const { data, setData, post, processing, errors, reset } = useForm({
    ProductName:'',
    //count homogenously...if you buy capsules, record capsules. can be adapted for larger shops.
    ProductUnit: '',
    ProductBuyingPrice: '',
    ProductSellingPrice: '',
    ProductAmount: '',
});
  
 //submit function 
 function submit(e){
    e.preventDefault()
    post(route('product.store',stock.id),{
        onSuccess: () => reset('ProductName'),
    }
    )
};
  
  
    return (
    <AuthenticatedLayout
    user={props.auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products Dashboard</h2>}
    
    >
        <Head title="Create Product"/>
        
        
        
        
        <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0 bg-gray-100">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="text" value="Product Name : Eg Mara moja - Paracetamol" />

                    <TextInput
                        id="productName"
                        type="text"
                        name="productName"
                        //value={data.pharmacy}
                        className="mt-1 block w-full"
                       
                        isFocused={true}
                        onChange={(e) => setData('productName', e.target.value)}
                    />

                    <InputError message={errors.ProductName} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="text" value="Product Units" />

                    <TextInput
                        id="productUnits"
                        type="text"
                        name="productUnits"
                        
                        className="mt-1 block w-full"
                        
                        onChange={(e) => setData('productUnits', e.target.value)}
                    />

                    <InputError message={errors.ProductUnit} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="text" value="Product Amount (Amount Instock)" />

                    <TextInput
                        id="productAmount"
                        type="number"
                        name="productAmount"
                        
                        className="mt-1 block w-full"
                        
                        onChange={(e) => setData('productAmount', e.target.value)}
                    />

                    <InputError message={errors.ProductAmount} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="text" value="Product Buying Price" />

                    <TextInput
                        id="productBuyingPrice"
                        type="number"
                        name="productBuyingPrice"
                        
                        className="mt-1 block w-full"
                        
                        onChange={(e) => setData('productBuyingPrice', e.target.value)}
                    />

                    <InputError message={errors.ProductAmount} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="text" value="Product Selling Price" />

                    <TextInput
                        id="productSellingPrice"
                        type="number"
                        name="productSellingPrice"
                        
                        className="mt-1 block w-full"
                        
                        onChange={(e) => setData('productSellingPrice', e.target.value)}
                    />

                    <InputError message={errors.ProductAmount} className="mt-2" />
                </div>
                

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Create Product
                    </PrimaryButton>
                </div>
            </form>
        </div>
        </div>
    </AuthenticatedLayout>
        
  )
}

export default CreateProduct