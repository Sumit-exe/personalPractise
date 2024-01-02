import React from 'react'

function Navbar() {
  return (
    <header className='w-full flex justify-around items-center p-5'>
        <h1 className='text-4xl font-bold text-green-600'>Logo</h1>

        <nav className='flex items-center gap-4 w-1/2'>
            <ul className='flex space-x-10 w-3/4'>
                <li className='text-lg font-semi-bold hover:text-green-400 hover:cursor-pointer hover:font-bold text-slate-400'>Home</li>
                <li className='text-lg font-semi-bold hover:text-green-400 hover:cursor-pointer hover:font-bold text-slate-400'>About</li>
                <li className='text-lg font-semi-bold hover:text-green-400 hover:cursor-pointer hover:font-bold text-slate-400'>Success Story</li>
                <li className='text-lg font-semi-bold hover:text-green-400 hover:cursor-pointer hover:font-bold text-slate-400'>Pricing</li>
            </ul>
            <button className='ring-2 ring-slate-200 px-3 py-2 rounded-lg text-lg outline-none hover:shadow-md text-green-400'>Contact Now</button>
        </nav>
    </header>
  )
}

export default Navbar