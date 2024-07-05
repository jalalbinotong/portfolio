import React, { useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <nav className='bg-black/30 backdrop-blur-sm text-white uppercase fixed w-full'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <a href='#home'>RAFI'S WEB</a>
        <div>
          <ul className='md:flex gap-10 hidden'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#project'>Project</a>
            <a href='#contact'>Contact</a>
          </ul>
        </div>
        <div className="flex md:hidden lg:hidden">
          <button id="toggleBtn" onClick={() => setNav(!nav)} type="button" className="text-gray-300 hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white px-3 py-2 rounded-md">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div> 
      </div>
      {/* mobile view */}
      {nav && 
      <ul className='flex flex-col text-center gap-10 lg:hidden mb-4' id='menu'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#project'>Project</a>
          <a href='#contact'>Contact</a>
      </ul>
      }
    </nav>
  )
}

export default Navbar