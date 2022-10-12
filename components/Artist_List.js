import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SpotifyContext } from '../components/Spotify'
import { useRouter } from 'next/router';
import Link from 'next/link'

const Artist_List = (props) => {
    const url =`${props.HEROKU}`+ 'artists'
    // console.log(url)
    
    const [artist, setArtist] = useState([])
    
    const getArtists = async () => {
        const response = await fetch(url)
        const data = await response.json();
        setArtist(data)
    }

            
    useEffect(()=> {
        getArtists();
    },[]);
    // console.log(props)
    const loaded = () => {
    return (
            <SpotifyContext.Consumer>
            {value => 
            //write code within this function to display more components and HTML
            <>
       
            
                {artist.map((artist,index)=> {
                    //preparing vars to send through Link as props
                    let name = artist.name
                    let bio = artist.bio
                    let instagram = artist.instagram
                    let spotify = artist.spotifyID
                    // console.log(token)
                return(
                    <div>
                        <h2>{artist.name}</h2>
                        <Link href={{pathname: `/artists/${artist._id}`, query: {data: [{value}.value[0],name, bio, instagram, spotify]}}}>
                            <a>Link</a>
                        </Link>
                    </div>
            )})}
            </>       
    }
            </SpotifyContext.Consumer> 
            
                
         
    )
    }

    const loading = () => {
        return(<h1>Loading...</h1>)
    }

    return artist ? loaded() : loading();

}


export default Artist_List