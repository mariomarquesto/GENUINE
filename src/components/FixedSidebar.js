import React from 'react'
import Logo from './Logo'

const Sidebar = () => {
  return (
      <aside className='w-64' aria-label='Sidebar'>
          <div className='py-4 px-3 bg-gray-50 rounded dark:bg-gray-800'>
              <Logo/>
              <ul className='space-y-2'>
                 
                  
              </ul>
          </div>
      </aside>
  )
}

export default Sidebar