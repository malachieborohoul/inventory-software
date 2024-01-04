import { BaggageClaim, BarChart, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'

const Sidebar = () => {
  return (
    <div className='w-64 min-h-screen bg-slate-900 text-slate-50 p-3 '>
        <div className='flex flex-col'>
            <Link href="">
                <div className='flex gap-3 '>
                    <ShoppingCart/>
                    <span className='font-semibold text-xl items-center bg-slate-950'>Inventory</span>
                </div>
            </Link>
           

            <nav className='flex flex-col gap-3 p-3'>
                <button className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md' href="">
                    <Home className='w-4 h-4'/>
                    <span>Home</span>
                </button>
                <button className='flex items-center space-x-2 p-2' href="">
                    <BaggageClaim className='w-4 h-4'/>
                    <span>Inventory</span>
                </button>
                <button className='flex items-center space-x-2 p-2' href="">
                    <ShoppingCart className='w-4 h-4'/>
                    <span>Sales</span>
                </button>

                <button className='flex items-center space-x-2 p-2' href="">
                    <ShoppingBag className='w-4 h-4'/>
                    <span>Purchases</span>
                </button>

                <button className='flex items-center space-x-2 p-2' href="">
                    <Cable className='w-4 h-4'/>
                    <span>Integrations</span>
                </button>

                <button className='flex items-center space-x-2 p-2' href="">
                    <BarChart4 className='w-4 h-4'/>
                    <span>Reports</span>
                </button>

                <button className='flex items-center space-x-2 p-2' href="">
                    <Files className='w-4 h-4'/>
                    <span>Documents</span>
                </button>
            </nav>
            <SubscriptionCard/>

            <div className='flex flex-col'>
                <div className='bg-slate-950 flex space-x-2 items-center py-3 px-2 justify-center'>
                    <ChevronLeft/>
                </div>
            </div>

        </div>
      </div>
  )
}

export default Sidebar