import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWpexplorer } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { rotate } from "./Usetime";
import Image from "next/image";

// Page variable used in Explore expandable to map over any future links added into array
const page = [
  { id: 1, name: "Home", pathname: "/", unavailable: false },
  { id: 2, name: "About", pathname: "/info", unavailable: false },
];

const Top_Nav = () => {
  const [selectedPage, setSelectedPage] = useState(page[0]);
  return (
    <>
      <div className="bg-neutral-200 flex justify-between">
        <div className="flex ">
          <div className="relative w-60 rounded-full">
            <Image
              className="w-16 rounded-full drop-shadow-lg p-1"
              src="https://i.imgur.com/hdOhoXL.jpg"
              layout="fill"
              objectFit="contain"
              alt="logo"
            ></Image>
          </div>
          <motion.div
            style={{ rotate }}
            animate={{ x: [1, 4, 0.5] }}
            whileHover={{ scale: 1.1 }}
          >
            <Link href="https://www.instagram.com/bodybellrecords/">
              <a className="flex justify-center w-8 rounded-lg text-2xl m-3">
                <FontAwesomeIcon icon={faInstagram} className="pt-3 pb-2 " />
              </a>
            </Link>
          </motion.div>
        </div>
        <div className="pr-4 ">
          <div className="flex flex-row">
            <Listbox value={selectedPage} onChange={setSelectedPage}>
              <Listbox.Button className="pt-4  text-xl">
                Explore <FontAwesomeIcon icon={faWpexplorer} />
              </Listbox.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options className="pl-2 pt-1 ">
                  {page.map((page) => (
                    <Listbox.Option
                      key={page.id}
                      value={page}
                      disabled={page.unavailable}
                      className="pt-1 rounded-lg"
                    >
                      <motion.div
                        style={{ rotate }}
                        animate={{ x: [1, 4, 0.5] }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Link href={{ pathname: page.pathname }}>
                          <a>{page.name}</a>
                        </Link>
                      </motion.div>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 h-0.5"></div>
    </>
  );
};

export default Top_Nav;
