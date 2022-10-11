import React from 'react'
// import Layout from '../../components/layout';

export default function Details () {
  
  return (
  <h1>HELLO</h1>
  )
}

export async function getStaticPaths(){
  
  const paths =  [
     { params: { id: '634428af3306ec3a2174ad26' }
   },
     {
       params: { id: '634428af3306ec3a2174ad27' }
     },
     { 
       params: {id: '634428af3306ec3a2174ad28'}
     }
   ]
   return { paths, fallback: false }
 }

 // This also gets called at build time
export async function getStaticProps({ params }) {
 // params contains the post `id`.
 // If the route is like /posts/1, then params.id is 1
 // const res = await fetch(`https://.../posts/${params.id}`)
 // const post = await res.json()

 // Pass post data to the page via props
 return { props: {letter: 'letter'} }
}

// export default Details