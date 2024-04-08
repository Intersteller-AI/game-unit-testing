import React from 'react'
import Navbar from './navbar/Navbar'

const FirstTest = () => {
  return (
    <main className='w-full flex justify-center px-12 py-12'>
      <div className='w-full max-w-[85rem]'>
        <h2 className='text-3xl font-semibold'> First test </h2>
        <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-12 gap-6'>
          <div className='bg-blue-500 min-h-40 drop-shadow-2xl border rounded-md p-6' data-testid='blue-square'>
            <h1 className='text-white font-semibold text-xl'>First Card</h1>
          </div>
          <div className='bg-red-500 min-h-40 drop-shadow-2xl border rounded-md p-6' data-testid='red-square'>
            <h1 className='text-white font-semibold text-xl'>Second Card</h1>
          </div>
          <div className='bg-yellow-500 min-h-40 drop-shadow-2xl border rounded-md p-6' data-testid='yellow-square'>
            <h1 className='text-white font-semibold text-xl'>Third Card</h1>
          </div>
          <div className='bg-green-500 min-h-40 drop-shadow-2xl border rounded-md p-6' data-testid='green-square'>
            <h1 className='text-white font-semibold text-xl'>Fourth Card</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FirstTest