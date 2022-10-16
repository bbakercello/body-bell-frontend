import React from 'react'
import Link from 'next/link'



const Top_Nav = () => {
  return (
    <div>
      
    <div className='flex flex-row-reverse bg-slate-50 '>
      
    <div className='h-12 underline underline-offset-1 underline pr-8'>
    <Link href= '/'>
    <a><h2 className='text-2xl '>Home</h2></a>
    </Link>
    </div>
    <div className='h-1'>
    <Link href={{ pathname: `/info`}}>
        <a><h2 className='text-2xl underline underline-offset-1 underline pr-6'>About</h2></a>
    </Link>
    </div>
    <nav className=' flex items-left'><img className='w-16 rounded-full drop-shadow-md' src='https://i.imgur.com/hdOhoXL.jpg' alt="Logo"></img></nav>
    </div>
    </div>
  )
}

export default Top_Nav