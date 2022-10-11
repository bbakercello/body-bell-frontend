import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SpotifyContext } from './Spotify'



const Artist_List = (props) => {

    const url =`${props.HEROKU}`+ 'artists'
    console.log(url)
    
    const [artist, setArtist] = useState([])
    
    const getArtists = async () => {
        const response = await fetch(url)
        const data = await response.json();
        setArtist(data)
    }

            
    useEffect(()=> {
        getArtists();
    },[]);
    console.log(props)
    const loaded = () => {
    
    return (
        <div>
            <SpotifyContext.Consumer>
            {value=>console.log({value}.value[0])  }
            </SpotifyContext.Consumer> 
            {artist.map((artist,index)=> {
                return(
                    <div>{artist.name}</div>
                    
            )})}
            
           
        </div>
    )
    }

    const loading = () => {
        return(<h1>Loading...</h1>)
    }

    return artist ? loaded() : loading();

}


export default Artist_List