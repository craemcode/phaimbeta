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
            <nav className=" bg-blue-900 hidden md:flex-col md:flex md:w-1/5 sticky top-0 h-screen hover:bg-blue-900 transition-all">
                <div className="mt-3 w-full flex justify-center">
                    <Link
                    as='button'
                    href={route('products.show',stock.id)}
                    disabled={route().current('products.show',{stock:stock.id})}>
                        <h3 className={` text-base font-bold ${route().current('products.show',{stock:stock.id})?'bg-slate-200':'hover:bg-slate-200'}  rounded p-2`}>
                            {`${stock.name}'s Dashboard`}
                        </h3>
                    </Link>
                </div>


                
                <div className='mt-2  w-full'>


                    <h4 className="text-white p-2 border-b border-slate-200 font-semibold">Add Products</h4>
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

                    <h4 className="text-white p-2 border-b border-slate-200 font-semibold">Sell</h4>
                    <SidebarNavLink
                    as='button'
                    href={route('dashboard')}
                    active={route().current('dashboard')}>
                        Open POS Terminal
                    </SidebarNavLink>
                    
                    <h4 className="text-white p-2 border-b border-slate-200 font-semibold">Restock</h4>
                    <SidebarNavLink
                    as='button'
                    href={route('dashboard')}
                    active={route().current('dashboard')}>
                        Open Restock Form
                    </SidebarNavLink>

                    <SidebarNavLink 
                    as='button'
                    href={route('dashboard')}
                    active={route().current('dashboard')}>
                        Inventory Dashboard
                    </SidebarNavLink>

                    <h4 className="text-white p-2 border-b border-slate-200 font-semibold">Reports</h4>
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
            
              

            
            
            
            <div className="flex flex-col items-stretch justify-center grow pt-5 sm:pt-0 bg-gray-300 " >
                
                
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

                <div className='bg-gray-400 grow flex flex-col justify-center max-h-128'>
                
                {children}
                </div>
            
            
                
            </div>
        </div>
        
    );
}