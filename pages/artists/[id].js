import React from 'react';
import {useEffect, useState} from 'react'
const HEROKU = process.env.NEXT_PUBLIC_BACKEND
import Message from '../../components/Message'
import New_Message from '../../components/New_Message';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { f16d } from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link';
import Layout from '../../components/Layout';


// import Nav from '../../components/Nav';


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
  const [message, setMessage] = useState([])

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


const loaded = () => {
  console.log(data)
  let artist = message.artist

//   const myLoader = ({ src, width, quality}) => {
//   return `${data.href}/?${data.images[0].width}&q=${quality || 75}`
// }}


  return (
    <>
    <div className='flex h-full bg-slate-400 '>
    <Layout >
      <div className='place-content-center'>
      <h1 className= "font-body text-4xl ">{name}</h1>
      </div>
      <a href={data.external_urls.spotify}><img src={data.images[0].url} alt="Album Cover" width={data.images[0].width} height={data.images[0].height}/></a>
      
      {/* <WebPlayback token={token}/> */}
      <Link  href={instagram}><a className='text-6xl m-3'><FontAwesomeIcon icon={faInstagram} /></a></Link>
      <div className='border-4 border-indigo-500/10 p-4 rounded-lg'>
      <Message deleteMessage={actuallyDeleteMessage} message={message} artist={artist} id={mongoID} />
      </div>
      <div className='pt-3'>
      <New_Message  id={mongoID} artist={artist} />
      </div>
      </Layout>
      <div className='content-center'>
      </div>
    </div>
    </>

  )

  }


  const loading = () => {
    return(<h1>Loading...</h1>)
}

return data ? loaded() : loading();

}
