import React from 'react';
import {useEffect, useState} from 'react'
const HEROKU = process.env.NEXT_PUBLIC_BACKEND
import Message from '../../components/Message'
import New_Message from '../../components/New_Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link';
import Layout from '../../components/Layout';
import Top_Nav from '../../components/Top_Nav';
import {useRouter} from 'next/router'



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
  // console.log(props.value)
  
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
  let artist = message.artist
  console.log(album)
 


  return (
    <>
    <Top_Nav/>
    <div className='h-full bg-slate-400 place-self-center '>
    <Layout className='place-self-center'>
      <div className='flex flex-row place-self-center'>
      <h1 className= "font-body text-4xl place-self-center">{name}</h1> 
      <Link  href={instagram}><a className='text-3xl m-3 place-self-center'><FontAwesomeIcon icon={faInstagram} /></a></Link>
      </div>
      <a className='drop-shadow-lg pb-3'href={data.external_urls.spotify}><img src={data.images[0].url} alt="Album Cover" width={data.images[0].width} height={data.images[0].height}/></a>
      <div className='border-4 border-indigo-500/10 p-4 rounded-lg'>
      <Message deleteMessage={actuallyDeleteMessage} message={message} artist={artist} id={mongoID} />
      </div>
      <div className='pt-3'>
      <New_Message  id={mongoID} artist={artist} />
      </div>
      <div>
        {album.items.map((album, index) => { 
           //set up state and function for fetching album tracks once album and artist data have been fetched
          const [track, setTrack] = useState('')

          const getTracks = async(token) => {
          const result = await fetch(`https://api.spotify.com/v1/artists/${spotify}/albums/${album.id}/tracks`, {
            method: 'GET',
            headers: {'Athorization': 'Bearer ' + token}
          })
          const track = await result.json()
          setTrack(track)
        }
          getTracks()

          if(track){
          return(
            <div>
              <h3>{album.name}</h3>
              <img src={album.images[2].url} alt='Album'/>
              <span>{album.release_date}</span>
              <ul>
               
              </ul>
            </div>
          )
        }}
        )}
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

return data && album ? loaded() : loading();

}
