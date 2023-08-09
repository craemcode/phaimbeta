import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";



export default function Products(props) {
  const stock = props.stock
  
  const importProducts = useForm(
    {uploaded_products_excel: null,}
  )

  function importExcel(event){
    event.preventDefault()
    importProducts.transform((data)=>({...data,stock_id:stock.id}))
    importProducts.post(route('products.bulk.import'))
  }
  
  
  
  
  
  return (
    <AuthenticatedLayout
    user={props.auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products Dashboard: {`${props.stock.name}`}</h2>}
    errors={props.errors}
    >
        <Head title={stock.name}/>
        
        
        <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                  Import some fucking products
            </div>
            <div className="flex flex-col justify-center items-center max-w-lg shadow-inner bg-gray-50 px-10 py-8 mb-12 text-gray-600 rounded-lg">
                <h4
                className='text-2xl font-semibold mb-4 text-gray-800' >
                    Import rooms to {`${stock.name}`}
                </h4>
                {importProducts.errors.uploaded_products_excel && `error`}
                <span className='mx-4 px-6 text-center text-gray-700 mb-2'>Kindly follow the below guidelines before importing/uploading your excel file:</span>
                <ul className=' font-light mb-6 text-center list-disc list-inside'>
                    <li>Ensure your file is in .xlsx format</li>
                    <li>Use <span className='font-bold'>dd/mm/yyyy</span> for dates and format them as dates</li>
                    <li>The balance column represents how much the tenant owes the landlord. Enter negative values for any overpaid amaounts</li>
                    <li>If the tenant name is left empty, only a room will be created without any corresponding tenant details</li>
                    <li>Use text format for <span className='font-semibold'> Phone Number</span> and <span className='font-semibold'> ID</span>  columns</li>
                    <li>To download a template for inputting data, <a href={route('export.excel.template')} className='border-b border-blue-400 text-blue-500' >CLICK HERE</a> </li>
                </ul>
                <form className='flex flex-col items-center' onSubmit={importExcel}>
                    <div className='flex flex-col items-center m-4 relative w-4/5  max-w-xs mb-6 bg-white rounded-lg shadow'>
                        <label htmlFor="file-upload" className='z-20 pt-6 flex flex-col items-center justify-center w-full h-full cursor-pointer'>
                            <svg className='z-10 w-12 h-12 text-blue-400' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                            </svg>
                            <p className="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your file here</p>
                        </label>
                        <input type="file" id='file-upload' className='p-4 mx-auto text-center placeholder:text-center hover:cursor-pointer focus:border-0 outline-none focus:outline-none file:rounded-full file:border-0 file:mr-4 file:p-2 file:px-4 file:hidden file:hover:cursor-pointer'
                        onChange={e => importProducts.setData((data)=>({...data,uploaded_rooms_excel:e.target.files[0]}))} />
                    </div>
                    <button
                    type='submit'
                    className='py-1 px-6 mx-2 transition ease-in-out duration-75 text-base w-3/5 bg-green-400 hover:shadow hover:bg-green-500 text-white rounded'
                    disabled={importProducts.processing}>
                        Import
                    </button>
                </form>
            </div>
        </div>
      
    
    </AuthenticatedLayout>
  )
}
