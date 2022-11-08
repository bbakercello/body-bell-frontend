import React, { useEffect, useState } from 'react'
import { SpotifyContext } from '../components/Spotify'
import Link from 'next/link'
import Email from './Email'
import { motion } from 'framer-motion'

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
                            <div className='flex flex-auto space-x-6'>
                            {artist.map((artist, index) => {
                                //preparing vars to send through Link as props
                                let name = artist.name
                                let bio = artist.bio
                                let instagram = artist.instagram
                                let spotify = artist.spotifyID
                                // console.log(token)
                                {if(value[0]!= undefined){
                                return (
                                    <motion.div whileHover={{scale: 1.2}}
                                    whileTap={{ scale: 0.8 }}
                                    
                                    >
                                    <div key={index} className='py-3 rounded-md'>
                                        
                                        <Link href={{ pathname: `/artists/${artist._id}`, query: { data: [{ value }.value[0], name, bio, instagram, spotify] } }}>
                                            <a><h2 className='text-2xl text-sky-600'> {artist.name} </h2></a>
                                        </Link>           
                                    </div>
                                    </motion.div>
                                )}}
                            })}
                            </div>
                        </>}
                </SpotifyContext.Consumer>
                <Email/>
            </>

        )
    }

    const loading = () => {
        return (<h1>Loading...</h1>)
    }

    return artist ? loaded() : loading()

}


export default Artist_List