import Head from 'next/head'
// import styles from '../styles/globals.css';
import MyApp from './app.js'
export default function Home() {

  return (
    <>
    <Head>
      <title>Body Bell Records</title>
      <meta name='keywords' content='music, record label, body bell, spotify'/>
      <link rel="stylesheet" href="https://use.typekit.net/ysu8jli.css"></link>
    </Head>
    <h1>Body Bell Records</h1>
    <MyApp></MyApp>
    </>
  
  )
}
