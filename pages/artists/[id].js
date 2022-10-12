import React from 'react';
// import Layout from '../../components/layout';
import {useEffect} from 'react'
import Artist_List from '../../components/Artist_List';

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
  
  const mongoID = props.value.id
  const name = props.value.data[1]
  const bio = props.value.data[2]
  const instagram = props.value.data[3]
  const spotify = props.value.data[4]
  const token = (props.value.data[0])
  //.substring(1).replace(",null]",'')
  console.log(token)
  console.log(spotify)
  
  const getArtist = async(token) => {
    const result = await fetch(`https://api.spotify.com/v1/artists/${spotify}`, {
      method: 'GET',
      headers: {'Authorization': `Bearer${token}`}
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json'
      // }
    });
    const data = await result.json();
    console.log(data)
    return(data)
  }

  useEffect(()=> {
    getArtist(token)
},[]);


  return (
  <h1>{name}</h1>
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