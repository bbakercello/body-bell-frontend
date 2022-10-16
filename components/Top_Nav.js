import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const page = [
  {id: 1, name: 'Home', pathname: '/', unavailable: false},
  {id: 2, name: 'About', pathname: '/info', unavailable: false}
]


const Top_Nav = () => {
  const [selectedPage, setSelectedPage] = useState(page[0])
  return (
    <>
    
    <div className='bg-slate-50 flex justify-between '>
    <img className='w-16 rounded-full drop-shadow-lg p-1' src='https://i.imgur.com/hdOhoXL.jpg' alt="Logo"></img>
    <div className='pr-4 '>
      <div className='flex flex-row'>
    <Listbox value={selectedPage} onChange={setSelectedPage}>
      <Listbox.Button className='pt-3 '>Explore</Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
      <Listbox.Options className='pl-2'>
        {page.map((page) => (
          <Listbox.Option 
            key={page.id}
            value={page}
            disabled={page.unavailable}
            className='pt-1'
          >
            <Link  href={{pathname: page.pathname}}><a >{page.name}</a></Link>
          </Listbox.Option>
        ))}
      </Listbox.Options>
      </Transition>
    </Listbox>
    </div>
    </div>
  

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
    




    
    </div>
    </>
  )
}

export default Top_Nav