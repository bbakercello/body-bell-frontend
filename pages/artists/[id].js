import React from 'react';
// import Layout from '../../components/layout';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  // console.log(context.query)
  // params contains the post `id`.
 // If the route is like /posts/1, then params.id is 1
 // const res = await fetch(`https://.../posts/${params.id}`)
 // const post = await res.json()

 // Pass post data to the page via props
 return { props: 
  {value: context.query} }
}
export default function Details (props) {
  
  const id = props.value.id
  const token = (props.value.data[0]).substring(1).replace(",null]",'')
  console.log((props.value.data[0]).substring(1).replace(",null]",''))
  console.log(props)
  
  return (
  <h1>HELLO</h1>
  )
}

// export async function getStaticPaths(){
  
//   const paths =  [
//      { params: { id: '634428af3306ec3a2174ad26' }
//    },
//      {
//        params: { id: '634428af3306ec3a2174ad27' }
//      },
//      { 
//        params: {id: '634428af3306ec3a2174ad28'}
//      }
//    ]
//    return { paths, fallback: false }
//  }

 // This also gets called at build time


// export default Details
// async function getServerSideProps  (context) {
//   console.log(context.query) 
//   // returns { id: episode.itunes.episode, title: episode.title}
  

//   //you can make DB queries using the data in context.query
//   return {
//       props: { 
//   }
// }}
// getServerSideProps()