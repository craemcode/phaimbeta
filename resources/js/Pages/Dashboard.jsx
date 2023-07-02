import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link, usePage } from '@inertiajs/react';

export default function Dashboard(props) {
    const { auth } = usePage().props
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl py-12 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Welcome
                            <br/>
                                <Link 
                                    as="button" 
                                    href={route("stocks.create")} 
                                    className="shadow bg-blue-500 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mr-5 rounded">
                                    Create Stock 
                                </Link>
    
                            <Link 
                                    as="button" 
                                    href={route("stocks.show")} 
                                    className="shadow bg-blue-500 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                    Show Stock 
                                </Link>
                        </div>
                    </div>
            </div> 
        </AuthenticatedLayout>
    );
}
