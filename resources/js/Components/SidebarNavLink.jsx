import React from 'react';
import { Link } from '@inertiajs/react';
export default function SidebarNavLink({method = 'get',as = 'button',href,active = false,children}){
    return(
        <Link
        method={method}
        as={as}
        href={href}
        disabled={active}
        className={`text-gray-400 transition-all flex p-2 pl-4 w-full  ${active ?'border-l-8 border-cyan-200 bg-slate-50 text-gray-600':'hover:bg-slate-200 hover:text-gray-700'}`}>
            {children}
        </Link>
    )
}