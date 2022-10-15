import React from 'react'
import Link from 'next/link'



const Top_Nav = () => {
  return (
    <>
    <div className='bg-slate-50 h-12 underline underline-offset-1 underline'>
    <Link href= '/'>
    <a><h2 className='text-2xl'>home</h2></a>
    </Link>
    </div>
    <div className='bg-slate-400 h-1'>
    <Link href={{ pathname: `/info`}}>
        <a><h2 className='text-2xl '>About</h2></a>
    </Link>
    </div>
    </>
  )
}

export default Top_Nav