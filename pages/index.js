import Layout from '../components/Layout'
import Artist_List from '../components/Artist_List';
import {SpotifyProvider, SpotifyContext} from '../components/Spotify';
import { useRouter } from 'next/router';
import Navbar from '../components/Nav'
import Head from 'next/head'
// import styles from '../styles/globals.css'


export default function Home() {
  //IMPORTS
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
  const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
  const HEROKU = process.env.NEXT_PUBLIC_BACKEND
 
  return (
    <div className="bg-tahiti">
    <Head>
      <title>Body Bell Records</title>
      <meta name='keywords' content='music, record label, body bell, spotify'/>
      
    </Head>
    
    <div >
      <h1 >Body Bell Records</h1>
    </div>
    <div>
  <Layout HEROKU={HEROKU}>
  <Navbar/>
  <SpotifyProvider CLIENT_ID = {CLIENT_ID} AUTH_ENDPOINT = {AUTH_ENDPOINT} REDIRECT_URI = {REDIRECT_URI} >
    <Artist_List HEROKU={HEROKU} className="bg-black"/>
  </SpotifyProvider>
  </Layout>
  </div>
  </div>
  
  )
}
