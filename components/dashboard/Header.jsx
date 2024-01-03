import { History } from 'lucide-react'
import React from 'react'
import SearchInput from './Search'

const Header = () => {
  return (
    <div className='bg-gray-100 h-12 flex justify-between items-center px-8'>
        <div className='flex'>
            <button><History className='h-5 w-5'/></button>
            <SearchInput/>
        </div>
        <div className='flex'>
            
        </div>
    </div>
  )
}

export default Header