import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";



export default function Products(props) {
    // Get the relevant props via destructuring the props object
  const {stock} = props
  
  const importProducts = useForm(
    {uploaded_products_excel: null,}
  )

  function importExcel(event){
    event.preventDefault()
    importProducts.transform((data)=>({...data,stock_id:stock.id}))
    importProducts.post(route('products.bulk.import',stock.id))
  }
  
  
  
  
  
  return (
    <AuthenticatedLayout
    user={props.auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"> {`${props.stock.name}`}</h2>}
    errors={props.errors}
    >
        <Head title={stock.name}/>
        
        
        <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0 bg-[url('/img/background.svg')]">
           
            <div className="flex flex-col justify-center items-center max-w-lg shadow bg-white mt-4 px-10 py-8 mb-12 text-gray-600 rounded-lg">
                <h4
                className='text-2xl font-semibold mb-4 text-gray-800' >
                    Import Products to {`${stock.name}`}
                </h4>
                {importProducts.errors.uploaded_products_excel && `error`}
                <span className=' text-gray-700 mb-2'>Kindly follow the below guidelines before importing/uploading your excel file:</span>
                <ol className=' font-light mb-6 text-left list-decimal list-inside'>
                    <li>Ensure your file is in .xlsx format</li>
                   <li> Strictly follow the example given in the template for best results</li>
                   <li> The import file will be read starting from the third row</li>
                    <li>To download a template for inputting data, <a href={route('export.excel.template')} className='border-b border-yellow-800 text-yellow-800' >Click here</a> </li>
                </ol>
                <form className='flex flex-col items-center' onSubmit={importExcel}>
                    <div className='flex flex-col items-center m-4 relative w-4/5  max-w-xs mb-6 bg-slate-50 rounded-lg shadow-inner hover:shadow-lg transition-all'>
                        <label htmlFor="file-upload" className='z-20 pt-6 flex flex-col items-center justify-center w-full h-full cursor-pointer'>
                            <svg className='z-10 w-12 h-12 text-gray-500' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                            </svg>
                            <p className="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your file here</p>
                        </label>
                        <input type="file" id='file-upload' className='p-4 w-full text-center placeholder:text-center hover:cursor-pointer focus:border-0 file:max-w-sm outline-none focus:outline-none file:rounded-full file:border-0 file:mr-4 file:p-2 file:px-4 file:hidden file:hover:cursor-pointer'
                        onChange={e => importProducts.setData((data)=>({...data,uploaded_products_excel:e.target.files[0]}))} />
                    </div>
                    <button
                    type='submit'
                    className='py-1 px-6 mx-2 transition ease-in-out duration-200 text-base w-3/5 bg-blue-800 hover:text-green-900 hover:shadow hover:bg-green-300 text-white rounded'
                    disabled={importProducts.processing}>
                        Import
                    </button>
                </form>
            </div>
        </div>
      
    
    </AuthenticatedLayout>
  )
}
