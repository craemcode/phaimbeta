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


        <div className="w-full min-h-screen flex-initial flex  flex-col md:flex-row bg-[url('/img/background.svg')]">
            <nav className="bg-white hidden md:flex-col md:flex md:w-1/5 sticky top-0 h-screen transition-all">
                <div className="mt-3 w-full  flex justify-center">
                    <Link
                    as='button'
                    href={route('products.show',stock.id)}
                    disabled={route().current('products.show',{stock:stock.id})}>
                        <h3 className={` text-base px-5 ${route().current('products.show',{stock:stock.id})?'border-yellow-800 border text-gray-900':'hover:bg-gray-900 hover:text-gray-100 border-yellow-800 border'}  rounded p-2`}>
                            {`${stock.name}`}
                        </h3>
                    </Link>
                </div>


                
                <div className='mt-2  w-full'>


                    <h4 className="text-yellow-800 p-2">Add Products</h4>
                    <SidebarNavLink
                    as='button'
                    href={route('product.create',stock.id)}
                    active={route().current('product.create',{stock:stock.id})}>
                        Add Single Product
                    </SidebarNavLink>
                    
                    <SidebarNavLink
                    as='button'
                    href={route('import.products',stock.id)}
                    active={
                        route().current('import.products',{stock:stock.id})
                    }>
                        Bulk Import (Excel)
                    </SidebarNavLink>
                    
                    <SidebarNavLink
                    as='button'
                    href={route('product.products_in_stock',stock.id)}
                    active={route().current('product.available_to_restock',{stock:stock.id})}>
                        Restock
                    </SidebarNavLink>

                    
                    

                    <h4 className="text-yellow-800 p-2">Reports</h4>
                    <SidebarNavLink 
                    as='button'
                    href={route('sales.index',stock.id)}
                    active={route().current('sales.index',{stock:stock.id})}>
                        Sales Data
                    </SidebarNavLink>
                    
                    <SidebarNavLink 
                    as='button'
                    href={route('restocks.list',stock.id)}
                    active={route().current('restocks.list',{stock:stock.id})}>
                        Restock Data
                    </SidebarNavLink>
                   
                </div>
                
            </nav>
            
              

            
            
            
            <div className="flex flex-col items-stretch justify-center  grow pt-5 sm:pt-0 " >
                
                
            <div className=' justify-self-start'>
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