import React, { useEffect, useState } from 'react'
import { SpotifyContext } from '../components/Spotify'
import Link from 'next/link'

function Artist_List(props) {
    const url = `${props.HEROKU}` + 'artists'
    // console.log(url)
    const [artist, setArtist] = useState([])

    const getArtists = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setArtist(data)
    }


    useEffect(() => {
        getArtists()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // console.log(props)
    const loaded = () => {
        return (
            <>
                {/* <navBar/> */}
                <SpotifyContext.Consumer >
                    {value =>
                        //write code within this function to display more components and HTML
                        <>
                            {console.log(value[0])}
                            
                            <div className='grid grid-flow-row auto-cols-max'>
                            {artist.map((artist, index) => {
                                //preparing vars to send through Link as props
                                let name = artist.name
                                let bio = artist.bio
                                let instagram = artist.instagram
                                let spotify = artist.spotifyID
                                // console.log(token)
                                {if(value[0]!= undefined){
                                return (
                                    <div key={index} className='py-3  hover:bg-sky-100 focus:outline-none focus:ring focus:ring-sky-300 rounded-md'>

                                        <Link href={{ pathname: `/artists/${artist._id}`, query: { data: [{ value }.value[0], name, bio, instagram, spotify] } }}>
                                            <a><h2 className='text-2xl '>{artist.name}</h2></a>
                                        </Link>

                                    </div>
                                )}}
                            })}
                            </div>
                        </>}
                </SpotifyContext.Consumer>

            </>

        )
    }

    const loading = () => {
        return (<h1>Loading...</h1>)
    }

    return artist ? loaded() : loading()

}


export default Artist_List