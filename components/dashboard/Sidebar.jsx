import { ChevronLeft, Home, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 min-h-screen bg-slate-900 text-slate-50 p-3'>
        <div className='flex flex-col'>
            <div className='flex gap-3 '>
                <ShoppingCart/>
                <span className='font-semibold text-xl items-center bg-slate-950'>Inventory</span>
            </div>

            <nav className='flex flex-col gap-4'>
                <Link className='flex' href="">
                    <Home/>
                    <span>Home</span>
                </Link>
            </nav>

            <div className='flex flex-col justify-end '>
                <div className='bg-slate-950 flex space-x-2 items-center py-3 px-2 justify-center'>
                    < ChevronLeft/>
                </div>
            </div>

        </div>
      </div>
  )
}

export default Sidebar