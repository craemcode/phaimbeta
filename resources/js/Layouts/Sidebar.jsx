import React,{useState} from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import SidebarNavLink from '@/Components/SidebarNavLink';
import FlashError from '@/Components/FlashError';
import FlashMessage from '@/Components/FlashMessage';

export default function Apartment({children,apartment,flash}){
    const [showSidebar,setShowSidebar] = useState(false)
    const [showFlash,setShowFlash] = useState(true)
        return (
            <div className='mt-2  w-full'>
                    <h4 className="text-gray-600 p-2 border-b border-slate-200 font-semibold">Water</h4>
                    <SidebarNavLink
                    as='button'
                    href={route('water.show',apartment.id)}
                    active={route().current('water.show')}>
                        Add Readings
                    </SidebarNavLink>
            </div>        
        )}
