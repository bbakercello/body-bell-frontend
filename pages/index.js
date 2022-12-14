import Layout from "../components/Layout";
import Artist_List from "../components/Artist_List";
import { SpotifyProvider, SpotifyContext } from "../components/Spotify";
import Logo from "../components/Logo.js";
import Head from "next/head";
import Top_Nav from "../components/Top_Nav";
import { motion } from "framer-motion";
export default function Home() {
  //IMPORTS
  const CLIENT_ID = process.env.CLIENT_ID;
  const AUTH_ENDPOINT = process.env.AUTH_ENDPOINT;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const HEROKU = process.env.BACKEND;

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div className="w-fit">
      <Top_Nav />
      <div className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
        <Head>
          <title>BODY BELL RECORDS</title>
          <meta
            name="keywords"
            content="music, record label, body bell, spotify"
          />
        </Head>
        <div className="flex flex-col self-center">
          <Logo />
          <div className="flex flex-col justify-center">
            <h1 className="self-center text-4xl text-sky-600 pt-8">
              BODY BELL RECORDS
            </h1>
            <div className="flex justify-center">
              <motion.svg
                width="400"
                height="40"
                viewBox="0 0 400 10"
                initial="hidden"
                animate="visible"
              >
                <motion.line
                  x1="0"
                  y1="0"
                  x2="400"
                  y2="0"
                  stroke="#0369a1"
                  variants={draw}
                  custom={2}
                />
              </motion.svg>
            </div>
          </div>
        </div>
        <div>
          <Layout>
            <SpotifyProvider
              HEROKU={HEROKU}
              CLIENT_ID={CLIENT_ID}
              AUTH_ENDPOINT={AUTH_ENDPOINT}
              REDIRECT_URI={REDIRECT_URI}
              draw={draw}
            >
              <Artist_List HEROKU={HEROKU} className="bg-black " />
            </SpotifyProvider>
          </Layout>
        </div>
      </div>
    </div>
  );
}
