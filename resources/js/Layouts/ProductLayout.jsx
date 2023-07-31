import React,{useState} from 'react';

import { Link } from '@inertiajs/react';
import SidebarNavLink from '@/Components/SidebarNavLink';
import FlashError from '@/Components/FlashError';
import FlashMessage from '@/Components/FlashMessage';

// Stock Sidebar
export default function ProductLayout({children,stock,flash}){
//const [showSidebar,setShowSidebar] = useState(false)
const [showFlash,setShowFlash] = useState(true)
    return (


        <div className="w-full min-h-screen flex-initial flex  flex-col md:flex-row">
            <nav className=" bg-white-700 hidden md:flex-col md:flex md:w-1/5 sticky top-0 h-screen transition-all">
                <div className="mt-3 w-full  flex justify-center">
                    <Link
                    as='button'
                    href={route('products.show',stock.id)}
                    disabled={route().current('products.show',{stock:stock.id})}>
                        <h3 className={` text-base font-bold ${route().current('products.show',{stock:stock.id})?'bg-blue-800 text-white':'hover:bg-blue-600'}  rounded p-2`}>
                            {`${stock.name}'s Dashboard`}
                        </h3>
                    </Link>
                </div>


                
                <div className='mt-2  w-full'>


                    <h4 className="text-green-800 p-2 border-b border-green-800 font-semibold">Add Products</h4>
                    <SidebarNavLink
                    as='button'
                    href={route('product.create',stock.id)}
                    active={route().current('product.create',{stock:stock.id})}>
                        Add Single Product
                    </SidebarNavLink>
                    
                    <SidebarNavLink
                    as='button'
                    href={route('dashboard')}
                    active={route().current('dashboard')}>
                        Bulk Import (csv)
                    </SidebarNavLink>

                    <h4 className="text-green-800 p-2 border-b border-green-800 font-semibold">Sell Products</h4>
                    <SidebarNavLink
                    as='button'
                    href={route('product.create',stock.id)}
                    active={route().current('product.create',{stock:stock.id})}>
                        Sales Terminal
                    </SidebarNavLink>
                    
                    <SidebarNavLink
                    as='button'
                    href={route('dashboard')}
                    active={route().current('dashboard')}>
                        Cart
                    </SidebarNavLink>

                    <h4 className="text-green-800 p-2 border-b border-green-800 font-semibold">Reports</h4>
                    <SidebarNavLink 
                    as='button'
                    href={route('dashboard')}
                    active={route().current('dashboard')}>
                        Sales Data
                    </SidebarNavLink>
                    
                    <SidebarNavLink 
                    as='button'
                    href={route('dashboard')}
                    active={route().current('dashboard')}>
                        Demand Data
                    </SidebarNavLink>
                   
                </div>
                
            </nav>
            
              

            
            
            
            <div className="flex flex-col items-stretch justify-center grow pt-5 sm:pt-0 bg-gray-50 " >
                
                
            <div className='bg-gray-300 justify-self-start'>
                {
                (flash.message && showFlash) && 
                <FlashMessage message={flash.message} onClick={() => setShowFlash(false)} />
            }
            {
                (flash.error && showFlash) &&
                <FlashError error={flash.error} onClick={() => setShowFlash(false)}  />
            }
                </div>

                <div className='grow flex flex-col justify-center max-h-128'>
                
                {children}
                </div>
            
            
                
            </div>
        </div>
        
    );
}