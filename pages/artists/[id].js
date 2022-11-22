import React from "react";
import { useEffect, useState } from "react";
const HEROKU = process.env.NEXT_PUBLIC_BACKEND;
import Contact from "../../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Layout from "../../components/Layout";
import Top_Nav from "../../components/Top_Nav";
import Collapsible from "react-collapsible";
import { motion } from "framer-motion";

export async function getServerSideProps(context) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1


  // Pass post data to the page via props
  return { props: { value: context.query } };
}

// main show detail function
export default function Details(props) {
  const [data, setData] = useState("");
  const [album, setAlbum] = useState("");

  //url for fetching messages
  const url = `${HEROKU}` + "messages";
  const mongoID = props.value.id;
  const name = props.value.data[1];
  const bio = props.value.data[2];
  const instagram = props.value.data[3];
  const spotify = props.value.data[4];
  const token = props.value.data[0];
  const draw = props.value.data[5];

  const getArtist = async (token) => {
    console.log(token)
    try {
      token = await(token)
        const response = await fetch(
          `https://api.spotify.com/v1/artists/${spotify}`,
            {   mode: 'cors',
                method: 'GET',
                headers: {Accept: 'application/json', Authorization: "Bearer " + token},
            }
        );
        const data = await response.json();
        console.log(data);
        setData(data);
    } catch (err) {
        console.log(err);
    }
};

  const getAlbums = async (token) => {
    try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${spotify}/albums`,
      {
        mode: "cors",
        method: "GET",
        headers: { Accept: 'application/json', Authorization: "Bearer " + token },
      }
    );
    const record = await response.json();
    setAlbum(record);
  } catch (err){
    console.log(err)
  }
};


  

  useEffect(() => {
    getArtist(token);
    getAlbums(token);
    console.log(token);
  }, []);

  const loaded = () => {

    return (
      <>
        <Top_Nav />
        <div className="h-full bg-gradient-to-b from-sky-600 via-sky-700 to-sky-600 place-self-center ">
          <Layout className="place-self-center">
            <div className="flex flex-row place-self-center">
              <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                  <h1 className="font-body text-slate-900 text-4xl place-self-center mt-3">
                    {name}
                  </h1>
                  <Link href={instagram}>
                    <a className="text-2xl m-3 pt-3 text-slate-800">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </Link>
                </div>
                <motion.svg
                  width="400"
                  height="60"
                  viewBox="0 0 600 100"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.line
                    x1="100"
                    y1="0"
                    x2="500"
                    y2="0"
                    stroke="#0f172a"
                    variants={draw}
                    custom={2}
                  />
                </motion.svg>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <a
                className="drop-shadow-lg pb-3"
                rel="noopener noreferrer"
                target="_blank"
                href={data.external_urls.spotify}
              >
                <img
                  src={data.images[0].url}
                  alt="Album Cover"
                  width={data.images[0].width}
                  height={data.images[0].height}
                />
              </a>
            </motion.div>

            <div>
              <h2 className="mt-6 text-3xl">Albums</h2>
            </div>
            <div>
              {album.items.map((album, index) => {
                //set up state and function for fetching album tracks once album and artist data have been fetched
                {
                  console.log(album.album_type);
                  return (
                    <div className="flex flex-col">
                      <h3 className="pt-4 text-sate-600 font-bold text-xl flex justify-center">
                        <a href={album.uri}>{album.name}</a>
                      </h3>
                      <img
                        className="pt-3"
                        src={album.images[1].url}
                        alt="Album"
                      />
                      <div className="flex justify-center">
                        <button className="bg-neutral-300 w-20 mt-4 text-xl rounded-lg">
                          <Collapsible
                            className="grid text-slate-800"
                            trigger="Learn"
                          >
                            <div className="w-20 flex flex-col">
                              <p className="text-sm">{album.album_type}</p>
                              <p className="text-xs">{album.release_date}</p>
                            </div>
                          </Collapsible>
                        </button>
                      </div>
                      <div className="flex justify-center p-4 rounded-lg">
                        <Contact />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </Layout>
          <div className="content-center"></div>
        </div>
      </>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return data && album ? loaded() : loading();
}
