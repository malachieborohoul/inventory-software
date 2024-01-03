import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <form>
        <label for="simple-search" class="sr-only">SearchInput</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
               <Search className='w-4 h-4 text-gray-500 dark:text-gray-500' />
            </div>
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-2 py-1.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search Customer..." required/>
        </div>
    </form>
  )
}

export default SearchInput