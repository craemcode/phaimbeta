import React from 'react';
import { Link } from '@inertiajs/react';
export default function SidebarNavLink({method = 'get',as = 'button',href,active = false,children}){
    return(
        <Link
        method={method}
        as={as}
        href={href}
        disabled={active}
        className={`hover:text-white transition-all flex p-2 pl-4 w-full  ${active ?'border-l-8 border-cyan-200 bg-slate-50 text-gray-600':'hover:bg-blue-800 hover:text-blue-700'}`}>
            {children}
        </Link>
    )
}