import React from 'react';
// import Layout from '../../components/layout';
import {useEffect, useState} from 'react'
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
  
  const [data, setData ] = useState('')

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
  console.log(data)
  useEffect(()=> {
    getArtist(token)
},[]);

const loaded = () => {
  
  return (
    <>
    <h1>Spotify Web Playback SDK Quick Start</h1>
    <button id="togglePlay">Toggle Play</button>

    <script src="https://sdk.scdn.co/spotify-player.js"></script>
    <script>
        {window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new Spotify.Player({
                name: 'Web Playback SDK Quick Start Player',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
            });

            // Ready
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('initialization_error', ({ message }) => {
                console.error(message);
            });

            player.addListener('authentication_error', ({ message }) => {
                console.error(message);
            });

            player.addListener('account_error', ({ message }) => {
                console.error(message);
            });

            document.getElementById('togglePlay').onclick = function() {
              player.togglePlay();
            };

            player.connect()}
        }
    </script>
      <h1>{name}</h1>
      <img src={data.images[0].url} alt="Album Cover" width={data.images[0].width} height={data.images[0].height}></img>
      <button id="togglePlay">Toggle Play</button>
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