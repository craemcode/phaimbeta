import React from 'react'
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductLayout from '@/Layouts/ProductLayout';
//import LabeledInput from "@/Components/LabeledInput";

function CreateStock(props) {
  
  //use form hook
  const { data, setData, post, processing, errors, reset } = useForm({
    PharmacyName:'',
    Location: '',
});
  
 //submit function 
 function submit(e){
    e.preventDefault()
    post(route('stocks.store'),{
        onSuccess: () => reset('PharmacyName'),
    }
    )
};
  
  
    return (
    <AuthenticatedLayout
    user={props.auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Stocks Dashboard</h2>}
    
    >
        <Head title="Create Stock"/>
       
        
        
        
        <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0 bg-[url('/img/background.svg')]">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="text" value="Pharmacy" />

                    <TextInput
                        id="pharmacy"
                        type="text"
                        name="pharmacy"
                        //value={data.pharmacy}
                        className="mt-1 block w-full"
                       
                        isFocused={true}
                        onChange={(e) => setData('pharmacy', e.target.value)}
                    />

                    <InputError message={errors.PharmacyName} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="text" value="Location" />

                    <TextInput
                        id="location"
                        type="text"
                        name="location"
                        
                        className="mt-1 block w-full"
                        
                        onChange={(e) => setData('location', e.target.value)}
                    />

                    <InputError message={errors.location} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Create Stock
                    </PrimaryButton>
                </div>
            </form>
        </div>
        </div>
    </AuthenticatedLayout>
        
  )
}

export default CreateStock