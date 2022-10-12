import Layout from '../components/Layout'
import Artist_List from '../components/Artist_List';
import {SpotifyProvider, SpotifyContext} from '../components/Spotify';
import { useRouter } from 'next/router';
import Navbar from '../components/Nav'
import Head from 'next/head'
// import App from './app.js'
// import styles from '../styles/Globals.module.css'
// import navbar from '../components/Nav'
export default function Home() {
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
  const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
  const HEROKU = process.env.NEXT_PUBLIC_BACKEND
 
  return (
    <>
    <Head>
      <title>Body Bell Records</title>
      <meta name='keywords' content='music, record label, body bell, spotify'/>
      
    </Head>
    <div class="flex items-center">
      <h1>Body Bell Records</h1>
    </div>
    <div className='global bg-tahiti-dark'>
  <Layout HEROKU={HEROKU}>
  <Navbar/>
  <SpotifyProvider CLIENT_ID = {CLIENT_ID} AUTH_ENDPOINT = {AUTH_ENDPOINT} REDIRECT_URI = {REDIRECT_URI} >
    {/* <navbar/> */}
    <Artist_List HEROKU={HEROKU}/>
  </SpotifyProvider>
  </Layout>
  </div>
    </>
  
  )
}
