'use client'


import { Users } from '@/utils/getAllUsers'
import Link from 'next/link'
import React, { useEffect } from 'react'

interface Props {
    users: Users[] | null
}
export default function Results({ users }: Props) {
    const results = users?.sort((a, b) => b.score - a.score);

    return (
        <div className='flex flex-col min-h-dvh justify-center items-center gap-7'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <Link href="/">
                    <button className="text-lg rounded-md bg-black p-2 py-1 text-slate-50 border-2 border-sky-400 hover:bg-sky-900"> ← </button>
                </Link>
                <h2 className="text-4xl font-black text-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                    RANKING
                </h2>
            </div>
            <div className=' bg-slate-100 p-3 rounded-md  shadow-2xl shadow-black'>
                <table className='md:w-96 gap-3 h-auto w-72'>
                    <thead className=' '>
                        <tr className='px-2 rounded-md border-b'>
                            <th className='text-start px-4'>Posicion</th>
                            <th className='text-start px-4'>Nombre</th>
                            <th className='text-end px-4'>Puntaje</th>
                        </tr>
                    </thead>
                    <tbody className=' '>
                        {results && results.length > 0 ? (
                            results.slice(0,15).map((result: Users, index: number) => (
                                <tr key={index} className='px-2 rounded-md gap-3 border-b hover:bg-slate-200 first:bg-slate-300 first:h-9 first:font-bold first:text-lg first:hover:bg-slate-500'>
                                    <td className='text-start px-4'>{index + 1}</td>

                                    <td className='text-start px-4'>{result.name}</td>
                                    <td className='text-end px-4 font-bold'>{result.score}</td>
                                </tr>
                            ))
                        ) : (
                            <div>
                                Cargando...
                            </div>
                        )}
                        
                            
                            
                    </tbody>
                </table>
            </div>
   
        </div>
    )
}

