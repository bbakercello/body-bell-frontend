import React from 'react'





const Spotify = (props) => {
  const RESPONSE_TYPE = 'token'
//   console.log(props.CLIENT_ID, REDIRECT_URI,AUTH_ENDPOINT)
  //Upon Login to Spotify, a token will be generated and hashed along with a token type of 'BEARER'
    return (
        <>
            <a href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${props.REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                Spotify Login
            </a>
        </>
   
  )
}

export default Spotify