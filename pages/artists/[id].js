import React from 'react';
// import Layout from '../../components/layout';
import {useEffect, useState} from 'react'
import Artist_List from '../../components/Artist_List';
import WebPlayback from '../../components/WebPlayer'

import navBar from '../../components/Nav';
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
  
  const [data, setData ] = useState('')
  const [album, setAlbum] = useState('')

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
      headers: {'Authorization': 'Bearer ' + token}
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json'
      // }
    });
    const data = await result.json();
    
    setData(data)
  }
 

  const getAlbums = async(token) => {
    const result = await fetch(`https://api.spotify.com/v1/artists/${spotify}/albums`, {
      method: 'GET',
      headers: {'Authorization': 'Bearer ' + token}
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json'
      // }
    });
    const record = await result.json();
    setAlbum(record)
    
  }
  console.log(album)
  useEffect(()=> {
    getArtist(token)
    getAlbums(token)
},[]);

const loaded = () => {
  
  return (
    <>
    {/* <navBar></navBar> */}
      <h1>{name}</h1>
      <img src={data.images[0].url} alt="Album Cover" width={data.images[0].width} height={data.images[0].height}></img>
      {/* <WebPlayback token={token}/> */}

    </>

  )

  }


  const loading = () => {
    return(<h1>Loading...</h1>)
}

return data ? loaded() : loading();


  

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