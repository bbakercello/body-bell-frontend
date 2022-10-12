//IMPORTS
import Layout from '../components/Layout'
import Artist_List from '../components/Artist_List';
import {SpotifyProvider, SpotifyContext} from '../components/Spotify';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
  const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
  const HEROKU = process.env.NEXT_PUBLIC_BACKEND
 

  return (
    <>
  <Layout HEROKU={HEROKU}>
  <SpotifyProvider CLIENT_ID = {CLIENT_ID} AUTH_ENDPOINT = {AUTH_ENDPOINT} REDIRECT_URI = {REDIRECT_URI} >
    <Artist_List HEROKU={HEROKU}/>
    {/* {pageProps.children} */}
    
  </SpotifyProvider>
  
  </Layout>
  </>
  )
}

export default MyApp
