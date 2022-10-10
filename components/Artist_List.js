import React, { useEffect, useState } from 'react'

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

    const loaded = () => {
    
    return (
        <div>
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