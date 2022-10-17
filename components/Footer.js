import React from 'react'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faWpexplorer} from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {

  return (
    <div className='bg-slate-300 h-16 justify-items-center rounded-lg' >
        
        <ul className='flex justify-around pt-4  text-md'>
       
            <li><Collapsible 
                className="comment-title  bg-slate-200 rounded-lg" 
                trigger="Follow Us"
                triggerStyle={{
                    borderRadius: "10px",
                    border: "10px solid rgba(255, 255, 255, 0)",
                    marginBottom: "20px",
                    
                }}
            >   <div><Link href='https://www.instagram.com/bodybellrecords/'><a className='flex justify-center '>Instagram</a></Link> </div>
            
            </Collapsible></li>
            <li><Link  href={{pathname: '/info'}}><a>Learn More</a></Link></li>
        </ul>
    </div>
  )
}

export default Footer






  

 

    






