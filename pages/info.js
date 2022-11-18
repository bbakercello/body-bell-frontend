import React from 'react'
import Top_Nav from '../components/Top_Nav'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
import { motion } from 'framer-motion'

const info = () => {
  return (
    <div>
      <Top_Nav />
      <div className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
        <Layout>
          <div className="flex flex-col pr-8 pl-8 bg-neutral-300 rounded-lg">
            <h1 className="self-center leading-normal text-4xl py-8 underline underline-offset-8">
              {" "}
              About Us
            </h1>
            <div className="font-paragraph">
              <p>
                During the late 1980s, ambient music occupied a complex place in
                the musical landscape. The genre is mature enough to stand on
                its own – see, for example, the catalog of Venture Records, a
                division of Virgin Records that specialises in ambient and
                electronic music by artists such as Hans-Joachim Roedelius
                (cluster), Holger Czukay (Can) and David Sylvian (Japan) - but
                it likely exists as part of a wider aesthetic taste. Elements of
                ambient music combined with minimalism, systems, and pop emerged
                in the indie music scene, for example through the neo-romantic
                aesthetic of label 4AD and the reverb dream pop of groups such
                as Dif Juz, This Mortal Coil, and the Cocteau Twins (The latter
                even teamed up with environmental legend Harold Budd).
              </p>
              <br></br>

              <p>
                Until 1978 and the founding of Mute Records, there were few
                record labels devoted exclusively to electronic music. Due to a
                lack of exports, many early technological pioneers formed their
                own. For example, Juan Atkins founded the Detroit-based label
                Metroplex Records, and Richie Hawtin and John Acquaviva founded
                their influential Plus 8 label. In the UK, Warp Records became
                one of the preeminent sources of home listening and experimental
                music in the 1990s. Later additions included Astralwerks, Ninja
                Tune, Black Hole Recordings and Perfecto Record labels.
              </p>
              <br></br>
            </div>
            <h2 className="self-center text-2xl">
              Body Bell Records was founded in 2022.
            </h2>
            <br></br>

            <p>
              Bell Records is an American record company founded in Boston in
              1952 by Nick Stevens, as a unit of Isnt It Fun LLC, after
              acquiring the rights to the Benny Bell name, Benny Bell used the
              Bell - Name sets records for bold novelty.{" "}
            </p>
            <br></br>
            <div>
              <p>
                Body Bell Records is looking for more passionate artists who
                have something to say with the art they make. Want to get in
                touch with us?
              </p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link href="https://www.instagram.com/bodybellrecords/">
                    <a className="flex justify-center w-8 rounded-lg text-2xl m-3">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="pt-3 pb-2 "
                      />
                    </a>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default info