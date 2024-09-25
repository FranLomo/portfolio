"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function MenuBar() {
    const pathname= usePathname()
    return (
        <div className='flex justify-center fixed w-full z-10'>
            <div className="justify-self-center rounded-xl mt-5 mx-10 flex-grow p-1 grid bg-gradient-to-tr from-slate-800 to-slate-600 grid-cols-4 max-w-3xl">      
                <strong className="justify-self-center"><Link className="text-purple-500 shadow-md shadow-purple-700" href="#landing">Landing</Link></strong>       
                <strong className="justify-self-center"><Link className="text-purple-500 shadow-md shadow-purple-700" href="#about">About</Link></strong>       
                <strong className="justify-self-center"><Link className="text-purple-500 shadow-md shadow-purple-700" href="#skills">Skills</Link></strong>       
                <strong className="justify-self-center"><Link className="text-purple-500 shadow-md shadow-purple-700" href="#contacto">Contacto</Link></strong>       
            </div>
        </div>
    );
}
