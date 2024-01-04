import { BaggageClaim, ChevronLeft, Home, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 min-h-screen bg-slate-900 text-slate-50 p-3'>
        <div className='flex flex-col'>
            <Link href="">
                <div className='flex gap-3 '>
                    <ShoppingCart/>
                    <span className='font-semibold text-xl items-center bg-slate-950'>Inventory</span>
                </div>
            </Link>
           

            <nav className='flex flex-col gap-4 p-3'>
                <Link className='flex items-center space-x-2' href="">
                    <Home className='w-4 h-4'/>
                    <span>Home</span>
                </Link>
                <Link className='flex items-center space-x-2' href="">
                    <BaggageClaim className='w-4 h-4'/>
                    <span>Inventory</span>
                </Link>
                <Link className='flex items-center space-x-2' href="">
                    <ShoppingCart className='w-4 h-4'/>
                    <span>Sales</span>
                </Link>
            </nav>

            <div className='flex flex-col justify-end '>
                <div className='bg-slate-950 flex space-x-2 items-center py-3 px-2 justify-center'>
                    <ChevronLeft/>
                </div>
            </div>

        </div>
      </div>
  )
}

export default Sidebar