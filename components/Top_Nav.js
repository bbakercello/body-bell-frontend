import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const page = [
  {id: 1, name: 'Home', pathname: '/', unavailable: false},
  {id: 2, name: 'About', pathname: '/info', unavailable: false}
]


const Top_Nav = () => {
  const [selectedPage, setSelectedPage] = useState(page[0])
  return (
    <div>
      
    <div className='flex flex-row-reverse bg-slate-50 '>


    <Listbox value={selectedPage} onChange={setSelectedPage}>
      <Listbox.Button>Explore</Listbox.Button>
      <Listbox.Options>
        {page.map((page) => (
          <Listbox.Option
            key={page.id}
            value={page}
            disabled={page.unavailable}
          >
            <Link href={{pathname: page.pathname}}><a>{page.name}</a></Link>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  

    {/* <div className='h-12 underline underline-offset-1 underline pr-8'>
    <Link href= '/'>
    <a><h2 className='text-2xl '>Home</h2></a>
    </Link>
    </div>
    <div className='h-1'>
    <Link href={{ pathname: `/info`}}>
        <a><h2 className='text-2xl underline underline-offset-1 underline pr-6'>About</h2></a>
    </Link>
    </div> */}
    




    <nav className=' flex items-left'><img className='w-16 rounded-full drop-shadow-md' src='https://i.imgur.com/hdOhoXL.jpg' alt="Logo"></img></nav>
    </div>
    </div>
  )
}

export default Top_Nav