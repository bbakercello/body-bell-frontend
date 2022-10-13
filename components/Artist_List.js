import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { SpotifyContext } from '../components/Spotify'
// import { useRouter } from 'next/router';
import Link from 'next/link'
// import navBar from './Nav'

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    // console.log(props)
    const loaded = () => {
    return (
            <>
            {/* <navBar/> */}
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
                    <div key={index} className='py-8 hover:bg-violet-1 focus:outline-none focus:ring focus:ring-violet-300' >
                        
                        <Link href={{pathname: `/artists/${artist._id}`, query: {data: [{value}.value[0],name, bio, instagram, spotify]}}}>
                            <a><h2>{artist.name}</h2></a>
                        </Link>
                            
                    </div>
            )})}
            </>       
    }
            </SpotifyContext.Consumer> 
            
            </>
         
    )
    }

    const loading = () => {
        return(<h1>Loading...</h1>)
    }

    return artist ? loaded() : loading();

}


export default Artist_List