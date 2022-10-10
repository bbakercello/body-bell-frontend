
import Layout from '../components/Layout'
import Spotify from '../components/Spotify'
import Artist_List from '../components/Artist_List'
import '../styles/globals.css'





function MyApp({ Component, pageProps }) {
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
  const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
  const HEROKU = process.env.NEXT_PUBLIC_BACKEND
  // console.log({HEROKU})
  return (
    <>
  <Layout HEROKU={HEROKU}>
  <Artist_List HEROKU = {HEROKU}/>
  <Spotify CLIENT_ID = {CLIENT_ID} AUTH_ENDPOINT = {AUTH_ENDPOINT} REDIRECT_URI = {REDIRECT_URI}></Spotify>
  </Layout>
  </>
  )
}

export default MyApp
