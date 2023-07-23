import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {
    const url = 'img/Logo-phaim.svg'
    return (
        <>
            <Head title="Please Login" />

            <div id="navbar" className="">
                
                <nav className="relative container mx-auto p-6 pt-0 items-end">
        
                    <div className="flex items-center justify-between ">
        
                        <div className="pt-2 flex">
                            <ApplicationLogo className="h-16 w-16 fill-current text-blue-700 inline">

                            </ApplicationLogo>
                            <span className='font-extrabold self-center tracking-wider ml-5 text-blue-700 text-3xl'> PHAIM </span> 
                        </div>
       
                        <div className="hidden self-end md:flex space-x-12">
                            <a href="" className="hover:text-darkGrayishBlue hover:border-b-2 border-blue-700">Product</a>
                            <a href="" className="hover:text-darkGrayishBlue hover:border-b-2 border-blue-700">Pricing</a>
                            <a href="" className="hover:text-darkGrayishBlue hover:border-b-2 border-blue-700">About us</a>
                            <a href="" className="hover:text-darkGrayishBlue hover:border-b-2 border-blue-700">Buy me tea</a>
                        </div>
        
                        <div id="access_control" className='flex self-end'>
                        {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="hidden p-3 px-6 pt-2 text-white bg-blue-700 rounded-full baseline md:block   hover:text-blue-700 hover:bg-white hover:font-black"
                        >
                        Dashboard
                        </Link>
                        ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="hidden mx-4 p-3 px-4 pt-2 text-white bg-blue-700 rounded-full baseline md:block  hover:text-blue-700 hover:bg-white hover:font-black"
                            >
                                Log in 
                            </Link>
                            <span className='font-semibold self-center'> or </span>
                            <Link
                                href={route('register')}
                                className="hidden mx-4 p-3 px-4 pt-2 text-white bg-blue-700 rounded-full baseline md:block  hover:text-blue-700 hover:bg-white hover:font-black "
                            >
                                Register
                            </Link>
                        </>
                        )}
                        </div>
                        
                    </div>
                </nav>    
            </div>
            
        </>
    );
}
