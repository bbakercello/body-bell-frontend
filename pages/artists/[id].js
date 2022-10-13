import React from 'react';
// import Layout from '../../components/layout';
import {useEffect, useState} from 'react'
import Artist_List from '../../components/Artist_List';
import WebPlayback from '../../components/WebPlayer'
const HEROKU = process.env.NEXT_PUBLIC_BACKEND
import Message from '../../components/Message'
import New_Message from '../../components/New_Message';
// `${props.HEROKU}`+ 'artists'

import navBar from '../../components/Nav';
export async function getServerSideProps(context) {

  // params contains the post `id`.
 // If the route is like /posts/1, then params.id is 1
 // const res = await fetch(`https://.../posts/${params.id}`)
 // const post = await res.json()

 // Pass post data to the page via props
 return { props: 
  {value: context.query} }
}


// main show detail function
export default function Details (props) {
  
  const [data, setData ] = useState('')
  const [album, setAlbum] = useState('')


  //url for fetching messages
  const url = `${HEROKU}`+ 'messages'
  const mongoID = props.value.id
  const name = props.value.data[1]
  const bio = props.value.data[2]
  const instagram = props.value.data[3]
  const spotify = props.value.data[4]
  const token = (props.value.data[0])
  
  
  const getArtist = async(token) => {
    const result = await fetch(`https://api.spotify.com/v1/artists/${spotify}`, {
      method: 'GET',
      headers: {'Authorization': 'Bearer ' + token}
    });
    const data = await result.json();
    setData(data)
  }
 

  const getAlbums = async(token) => {
    const result = await fetch(`https://api.spotify.com/v1/artists/${spotify}/albums`, {
      method: 'GET',
      headers: {'Authorization': 'Bearer ' + token}
    });
    const record = await result.json();
    setAlbum(record)
    
  }

  const [message, setMessage] = useState([])
    
  const getMessages = async () => {
      const response = await fetch(url)
      const data = await response.json();
      setMessage(data)
  }

    
  
    const actuallyDeleteMessage = async (e) => {
        e.preventDefault()
        const url =`https://body-bell-records.herokuapp.com/messages/`+`${e.target.id}`
    
        try{
          console.log(e.target.id)
          const deleteThis = await fetch(url,{
            method: 'DELETE'
          })
          const deletedMessage = await deleteThis.json()
          getMessages();
        }
        catch(err) {
          console.log(err)
        }
      }
    
  useEffect(()=> {
    getArtist(token)
    getAlbums(token)
    getMessages()
    // console.log(message)
    // console.log(mongoID)
},[]);

const loaded = () => {
  let artist = message.artist
  return (
    <>
      <h1>{name}</h1>
      <img src={data.images[0].url} alt="Album Cover" width={data.images[0].width} height={data.images[0].height}></img>
      {/* <WebPlayback token={token}/> */}
      <Message deleteMessage={actuallyDeleteMessage} message={message} getMessages={getMessages} artist={artist} id={mongoID} getArtist={getArtist}/>
      <New_Message id={mongoID} artist={artist} getArtist={getArtist}/>
    </>

  )

  }


  const loading = () => {
    return(<h1>Loading...</h1>)
}

return data ? loaded() : loading();

}
