import React from "react";
import { useEffect, useState } from "react";
const HEROKU = process.env.NEXT_PUBLIC_BACKEND;
import Message from "../../components/Message";
import New_Message from "../../components/New_Message";
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
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()

  // Pass post data to the page via props
  return { props: { value: context.query } };
}

// main show detail function
export default function Details(props) {
  const [data, setData] = useState("");
  const [album, setAlbum] = useState("");
  const [message, setMessage] = useState([]);

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
    const result = await fetch(
      `https://api.spotify.com/v1/artists/${spotify}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const data = await result.json();
    setData(data);
  };

  const getAlbums = async (token) => {
    const result = await fetch(
      `https://api.spotify.com/v1/artists/${spotify}/albums`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );
    const record = await result.json();
    setAlbum(record);
  };

  const getMessages = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMessage(data);
  };

  const actuallyDeleteMessage = async (e) => {
    e.preventDefault();
    const url =
      `https://body-bell-records.herokuapp.com/messages/` + `${e.target.id}`;

    try {
      console.log(e.target.id);
      const deleteThis = await fetch(url, {
        method: "DELETE",
      });
      const deletedMessage = await deleteThis.json();
      getMessages();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtist(token);
    getAlbums(token);
    getMessages();
    console.log(token);
  }, []);

  const loaded = () => {
    let artist = message.artist;

    return (
      <>
        <Top_Nav />
        <div className="h-full bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800 place-self-center ">
          <Layout className="place-self-center">
            <div className="flex flex-row place-self-center">
              <div className="flex flex-col justify-center">
                <h1 className="font-body text-sky-600 text-4xl place-self-center">
                  {name}
                </h1>
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
                    stroke="#0369a1"
                    variants={draw}
                    custom={2}
                  />
                </motion.svg>
              </div>
              <Link href={instagram}>
                <a className="text-3xl m-3 text-sky-600 place-self-center">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </Link>
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
            <div className="border-4 border-indigo-500/10 p-4 rounded-lg">
              <Message
                deleteMessage={actuallyDeleteMessage}
                message={message}
                artist={artist}
                id={mongoID}
              />
            </div>
            <div className="pt-3">
              <New_Message id={mongoID} artist={artist} />
            </div>

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
                      <h3 className="pt-4 text-sky-600 font-bold text-xl flex justify-center">
                        <a href={album.uri}>{album.name}</a>
                      </h3>
                      <img
                        className="pt-3"
                        src={album.images[1].url}
                        alt="Album"
                      />
                      <div className="flex justify-center">
                        <button className="bg-sky-700 w-20 mt-4 rounded-lg">
                          <Collapsible
                            className="grid text-slate-800"
                            trigger="Learn"
                          >
                            <div className="w-20 flex flex-col">
                              <p>{album.album_type}</p>
                              <p>{album.release_date}</p>
                            </div>
                          </Collapsible>
                        </button>
                      </div>
                      <ul></ul>
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
