/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

const Logo = (props) => {
  return (
    <div className="p-5 w-1/2 flex self-center relative">
      <Image
        className="w-1/3 md:w-80 rounded-full drop-shadow-lg mt-6"
        src="https://i.imgur.com/hdOhoXL.jpg"
        height={1750}
        width={1750}
      />
    </div>
  );
};

export default Logo;
