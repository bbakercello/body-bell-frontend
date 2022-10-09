
import Layout from '../components/Layout'
import Spotify from '../components/Spotify'
import '../styles/globals.css'





function MyApp({ Component, pageProps }) {

  
  return (
  <Layout>
  <Component {...pageProps} />
  {/* <Spotify></Spotify> */}
  
  </Layout>
  )
}

export default MyApp
