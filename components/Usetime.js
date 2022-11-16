import React from "react";
import { useTime } from "framer-motion";
import { useTransform } from "framer-motion";

const Usetime = () => {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 100000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
};

export default Usetime;
