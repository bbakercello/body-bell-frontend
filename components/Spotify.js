import React from 'react'
import {useContext} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'


const SpotifyContext = React.createContext([{}, () => {}]);


const SpotifyProvider = (props) => {
  const RESPONSE_TYPE = 'token'
  console.log(props.REDIRECT_URI)
  //Upon Login to Spotify, a token will be generated and hashed along with a token type of 'BEARER'
  

  //useState to hold onto token after initialization
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')
    setToken(token)

    if(!token && hash){
      //have not defined token yet, so here we will do that
      console.log('hello')
      //token is in params but must be split by the '&'
      token = hash.substring(1).split('&')
      // console.log(token)
      //token defined as [access_token = '']
      // need to grab the element in this array that starts after the 'access_token='
      //'token_type' is located at [0], need to target at [1] to get the desired string 
      token = token.find(elem => elem.startsWith('access_token')).split('=')[1]    
      
      setToken(token)
      
    }setToken(token)
    })
    console.log(token)
    if(token == null){
      return (
        <>
        <a href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${props.REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                  Spotify Login
        </a>
        </>)
    }
    else{ 
      return(
        <>
            <SpotifyContext.Provider value={[token,setToken]}>
            <>
                {props.children}
            </>
            </SpotifyContext.Provider>
        </>
)}
    
}
 

export {SpotifyContext, SpotifyProvider};