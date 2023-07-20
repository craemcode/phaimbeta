import React from 'react'
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import NumberInput from '@/Components/NumberInput';
import { Head, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductLayout from '@/Layouts/ProductLayout';
//import LabeledInput from "@/Components/LabeledInput";

function CreateProduct(props) {
    
  //use form hook
  const { data, setData, post, processing, errors, reset, transform} = useForm({
    
    productName:'',
    //count homogenously...if you buy capsules, record capsules. can be adapted for larger shops.
    productAmount: '',
    productUnit: '',
    productBuyingPrice: '',
    productSellingPrice: '',
    
});
  
 //submit function 
 function submit(e){
    e.preventDefault()
    transform(data=>({
        ...data,
        stock_id: props.stock.id,
    }))
    post(route('product.store'),{
        onSuccess: () => reset('ProductName'),
    }
    )
};
  
  
    return (
    <AuthenticatedLayout
    user={props.auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products Dashboard: {`${props.stock.name}`}</h2>}
    
    >
        <Head title={props.stock.name}/>
        
        <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0 bg-gray-100">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            

            <form onSubmit={submit}>
               
                <div>
                    <InputLabel htmlFor="text" value="Product Name" />

                    <TextInput
                        id="productName"
                        type="text"
                        name="productName"
                        value={data.productName}
                        className="mt-1 block w-full"
                        placeholder='Eg. Mara moja - Paracetamol'
                        autoComplete='productname'
                        isFocused={true}
                        onChange={(e) => setData('productName', e.target.value)}
                    />

                    <InputError message={errors.productName} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="text" value="Product Units" />

                    <TextInput
                        id="productUnits"
                        type="text"
                        name="productUnits"
                        className="mt-1 block w-full"
                        value={data.productUnit}
                        onChange={(e) => setData('productUnit', e.target.value)}
                    />

                    <InputError message={errors.productUnit} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="number" value="Product Amount (Amount Instock)" />

                    <NumberInput
                        id="productAmount"
                        type="number"
                        name="productAmount"
                        value={data.productAmount}
                        className="mt-1 block w-full"
                        
                        onChange={(e) => setData('productAmount', e.target.value)}
                    />

                    <InputError message={errors.productAmount} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="number" value="Product Buying Price" />

                    <NumberInput
                        id="productBuyingPrice"
                        type="number"
                        name="productBuyingPrice"
                        value={data.productBuyingPrice}
                        className="mt-1 block w-full"
                        
                        onChange={(e) => setData('productBuyingPrice', e.target.value)}
                    />

                    <InputError message={errors.productBuyingPrice} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="number" value="Product Selling Price" />

                    <NumberInput
                        id="productSellingPrice"
                        type="number"
                        name="productSellingPrice"
                        value={data.productSellingPrice}
                        className="mt-1 block w-full"
                        
                        onChange={(e) => setData('productSellingPrice', e.target.value)}
                    />

                    <InputError message={errors.productSellingPrice} className="mt-2" />
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