import Layout from '../components/Layout'
import Artist_List from '../components/Artist_List';
import {SpotifyProvider, SpotifyContext} from '../components/Spotify';
import Logo from '../components/Logo.js'
import Head from 'next/head'
import Top_Nav from '../components/Top_Nav';

export default function Home() {
  //IMPORTS
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
  const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
  const HEROKU = 'https://body-bell-records.herokuapp.com/'
 
  return (
    <>
    <Top_Nav />
    <div className="bg-tahiti" >
    <Head>
      <title>BODY BELL RECORDS</title>
      <meta name='keywords' content='music, record label, body bell, spotify'/>

    </Head>
    
    <div >
      <Logo/>
      <div className='grid grid-cols-4'>
        <h1 className='place-content-center grid col-start-2 col-span-2 leading-normal text-4xl py-8 underline underline-offset-8'>BODY BELL RECORDS</h1>
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
