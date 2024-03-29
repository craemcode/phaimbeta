import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

import { Head,Link, usePage } from '@inertiajs/react';

export default function Dashboard(props) {
    const { stocks, flash} = usePage().props
    
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="min-h-screen bg-[url('/img/hollowed-boxes.svg')] p-4">

            
            {
                //flash messages logic
                flash.message && (
                    <div
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3  mx-auto rounded relative md:flex max-w-md justify-center cursor-pointer"
                        role="alert"
                        id="addStockMessage"
                        onClick={() => {
                            document.getElementById(
                                "addStockMessage"
                            ).style.display = "none";
                        }}
                    >
                        <div className="md:w-3/4 ">
                            {flash.message}
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <svg
                                    className="fill-current h-6 w-6 text-green-500"
                                    role="button"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <title>Close</title>
                                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                )
            }

            <div className="max-w-7xl py-12 mx-auto sm:px-6 lg:px-12 flex flex-col items-center ">
                <div className="bg-white w-1/2 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                       A stock can also be called a clinic. It is the collection of all products in your pharmacy.
                        <p className='font-bold'>Press the button below to create a new clinic/stock</p>
                        <br />
                        <Link
                            as="button"
                            href={route("stocks.create")}
                            className="shadow bg-blue-500 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mr-5 rounded"
                        >
                            Create Stock
                        </Link>
                        
                    </div>
                    <div className=" bg-white flex  md:flex-row justify-around px-2 rounded-md py-4 flex-wrap">
                        {stocks.map(({ name, id, location }) => (
                            
                        <Link
                        as='div'
                        href={route('products.show',id)}
                            className="bg-blue-100 grow-1 rounded-lg py-2 px-4 my-2 font-semibold hover:bg-green-100 cursor-pointer shadow-lg"
                            key={id}
                                >
                                    <div>
                                        <img src="img/chemist.svg" alt="" />
                                    </div>



                                    <div className='flex flex-row justify-between items-center'>
                                    <span>
                                        {name} <br></br> {location}
                                    </span>   
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 font-normal">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                    </div>

                                </Link>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <Footer>

            </Footer>
        </AuthenticatedLayout>
    );
}
