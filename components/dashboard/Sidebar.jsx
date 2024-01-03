import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 min-h-screen bg-slate-900 text-slate-50'>
        <div className='flex flex-col'>
            <div className='flex '>
                <ShoppingCart/>
                <span>Inventory</span>
            </div>

        </div>
      </div>
  )
}

export default Sidebar