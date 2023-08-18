import React from 'react';
import { Link } from '@inertiajs/react';
export default function SidebarNavLink({method = 'get',as = 'button',href,active = false,children}){
    return(
        <Link
        method={method}
        as={as}
        href={href}
        disabled={active}
        className={`text-gray-900 transition-all ease-in duration-300 flex p-2 pl-3 w-full  ${active ?'border-l-8 hover:pl-4 border-blue-800 text-gray-900':'hover:pl-6'}`}>
            {children}
        </Link>
    )
}