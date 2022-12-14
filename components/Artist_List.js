import React, { useEffect, useState } from "react";
import { SpotifyContext } from "../components/Spotify";
import Link from "next/link";
import { motion } from "framer-motion";

function Artist_List(props) {
  const url = '../api/artists';
  const [artist, setArtist] = useState([]);

  const getArtists = async () => {
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    setArtist(data);
  };

  useEffect(() => {
    getArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loaded = () => {
    return (
      <div>
        <SpotifyContext.Consumer>
          {(value) => (
            //write code within this function to display more components and HTML
            <>
              <div>
                {artist.map((artist, index) => {
                  
                  //preparing vars to send through Link as props
                  let name = artist.name;
                  let bio = artist.bio;
                  let instagram = artist.instagram;
                  let spotify = artist.spotifyID;
                  let draw = props.draw;
        
                  {
                    if (value[0] != undefined) {
                      return (
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <div key={index} className="py-3 rounded-md">
                            <Link
                              href={{
                                pathname: `/artists/${artist._id}`,
                                query: {
                                  data: [
                                    { value }.value[0],
                                    name,
                                    bio,
                                    instagram,
                                    spotify,
                                    draw,
                                  ],
                                },
                              }}
                            >
                              <a>
                                <h2 className="text-2xl text-sky-600">
                                  {" "}
                                  {artist.name}{" "}
                                </h2>
                              </a>
                            </Link>
                          </div>
                        </motion.div>
                      );
                    }
                  }
                })}
              </div>
            </>
          )}
        </SpotifyContext.Consumer>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return artist ? loaded() : loading();
}

export default Artist_List;
