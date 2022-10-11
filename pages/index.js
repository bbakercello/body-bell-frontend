import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  // console.log(process.env.NEXT_PUBLIC_REDIRECT_URI)
  return (
    <>
    <Head>
      <title>Body Bell Records</title>
      <meta name='keywords' content='music, record label, body bell, spotify'/>
      <link rel="stylesheet" href="https://use.typekit.net/ysu8jli.css"></link>
    </Head>
    <h1>Body Bell Records</h1>

    </>
  
  )
}
export async function getServerSideProps(){
  // console.log(process.env.CLIENT_ID)


  return{
    props: {
      hello: 'world'
    }
  }
}