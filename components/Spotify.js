import React from 'react'

import {useState} from 'react'
import {useEffect} from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
const SpotifyContext = React.createContext([{}, () => {}]);


const SpotifyProvider = (props) => {
  const RESPONSE_TYPE = 'token'
  // console.log(props.REDIRECT_URI)
  //Upon Login to Spotify, a token will be generated and hashed along with a token type of 'BEARER'
  

  //useState to hold onto token after initialization
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')
    setToken(token)

    if(!token && hash){
      //have not defined token yet, so here we will do that
     
      //token is in params but must be split by the '&'
      token = hash.substring(1).split('&')
    
      //token defined as [access_token = '']
      // need to grab the element in this array that starts after the 'access_token='
      //'token_type' is located at [0], need to target at [1] to get the desired string 
      token = token.find(elem => elem.startsWith('access_token')).split('=')[1]    
      // let myToken=token
      
      window.localStorage.setItem("token",token)
     
    }
    setToken(token)
    },[])

    const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
    }
  
    if(token === ""){
      
      return (
        <>
          <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link
              className="p-2 bg-sky-700 rounded-md"
              href={`${process.env.AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              <div className="pt-10">
                <p className="p-2 bg-sky-500/100 rounded-md focus:outline-none focus:ring focus:ring-sky-300 rounded-md">
                  Spotify Login
                </p>
              </div>
            </Link>
          </motion.a>

          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link href={{ pathname: `/info` }}>
              <div>
                <div className="pt-10">
                  <p className="p-2 bg-sky-500/100 rounded-md focus:outline-none focus:ring focus:ring-sky-300 rounded-md">
                    Learn More
                  </p>
                </div>
                <div className="flex justify-center items-center pt-2 "></div>
              </div>
            </Link>
          </motion.div>
        </>
      );
    }
    else{ 
      return(
        <>
        
            <SpotifyContext.Provider value={[token,setToken]}>
            <>
                {props.children}
                <div className='pt-10 flex flex-col'>
                  <div className='flex justify-center'>
                  </div>
                <div className='grid grid-rows-3 grid-col'>
                  <img className='outline-double drop-shadow-xl w-60 rounded-lg row-start-1 col-start-1 row-span-3 col-span-3'src='https://i.imgur.com/q7hWwpw.jpg'></img>
                  <div 
                    
                    className='row-start-2 col-start-2 pt-6 flex flex-col mt-16'>
                  <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }} 
                  >
                  <button className='justify-center w-40 rounded-md pb-3'onClick={logout}>Enter</button>
                  </motion.div>
                  <motion.div animate={{ rotate: 360 }}
                    whileHover={{ scale: 1.2}}
                    whileTap={{ scale: 0.9 }} 
                    transition={{ type: 'spring' }}
                    className='self-center pt-4' 
                    onClick={logout}>
                  <img className='w-5 rounded-full blur 'src='https://i.imgur.com/rWidBII.jpg'></img>
                  </motion.div>
                  </div>
                </div>
                </div>
            </>
            </SpotifyContext.Provider>
  
        </>
)}
    
}
 

export {SpotifyContext, SpotifyProvider};