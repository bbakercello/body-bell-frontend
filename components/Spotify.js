import React from 'react'

import {useState} from 'react'
import {useEffect} from 'react'


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
    console.log(token)
    if(!token && hash){
      //have not defined token yet, so here we will do that
     
      //token is in params but must be split by the '&'
      token = hash.substring(1).split('&')
      // console.log(token)
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
        <a className='p-2 bg-sky-500/100 rounded-md' href={`https://accounts.spotify.com/authorize?client_id=afad3723193640e2ad7cf5e9c8bd97c6&redirect_uri=http://localhost:3000&response_type=${RESPONSE_TYPE}`}>
                  Spotify Login
        </a>
        {/* <button onClick={logout}>Logout</button> */}
        </>)
    }
    else{ 
      return(
        <>
            <SpotifyContext.Provider value={[token,setToken]}>
            <>
                {props.children}
                <div className='pt-10'>
                <button className='p-2 bg-sky-500/100 rounded-md'onClick={logout}>Logout</button>
                </div>
            </>
            </SpotifyContext.Provider>
        </>
)}
    
}
 

export {SpotifyContext, SpotifyProvider};