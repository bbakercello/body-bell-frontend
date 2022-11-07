import Layout from '../components/Layout'
import Artist_List from '../components/Artist_List';
import {SpotifyProvider, SpotifyContext} from '../components/Spotify';
import Logo from '../components/Logo.js'
import Head from 'next/head'
import Top_Nav from '../components/Top_Nav';

export default function Home() {
  //IMPORTS
  const CLIENT_ID = process.env.CLIENT_ID
  const AUTH_ENDPOINT = process.env.AUTH_ENDPOINT
  const REDIRECT_URI = process.env.REDIRECT_URI
  const HEROKU = process.env.BACKEND
 
  return (
    <>
    <Top_Nav />
    <div className="bg-gradient-to-b from-tahiti via-sky-300 to-tahiti" >
    <Head>
      <title>BODY BELL RECORDS</title>
      <meta name='keywords' content='music, record label, body bell, spotify'/>
    </Head>
   
    <div>
        <Logo/>
      <div className='grid items-center justify-center'>
        <h1 className='leading-normal text-4xl py-8 underline underline-offset-8'>BODY BELL RECORDS</h1>
        <span></span>
      </div>
    </div>

    <div>
    <Layout >
        <SpotifyProvider HEROKU={HEROKU} CLIENT_ID = {CLIENT_ID} AUTH_ENDPOINT = {AUTH_ENDPOINT} REDIRECT_URI = {REDIRECT_URI} >
          <Artist_List HEROKU={HEROKU} className="bg-black "/>
        </SpotifyProvider>
        </Layout>
    </div>
    </div>
    </>
  )
}
