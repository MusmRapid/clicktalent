import React from "react";
import { motion } from "framer-motion";

import image1 from "../../../assets/large/1.png";
import image2 from "../../../assets/large/2.png";
import image3 from "../../../assets/large/3.png";
import image4 from "../../../assets/large/4.png";
import image5 from "../../../assets/large/5.png";
import image6 from "../../../assets/large/6.png";

import NavbarDesktop from "../../Navbar/NavbarDesktop";

const HeroSection: React.FC = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const positions = [
    "top-32 left-40",
    "top-32 right-12",
    "top-[60%] left-4",
    "top-[55%] right-28",
    "bottom-10 left-[20%]",
    "-bottom-12 right-[30%]",
  ];

  return (
    <div className="relative pb-32 m-2 overflow-hidden rounded-3xl bg-marketGreen md:min-h-[850px]">

      <div className="hidden md:block">
        <NavbarDesktop />
      </div>

      {images.map((img, idx) => (
        <motion.img
          key={idx}
          src={img}
          alt={`decor-${idx}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
          className={`hidden md:block absolute w-20 h-44 object-cover rounded-t-full rounded-b-full ${positions[idx]} z-0`}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-4 mt-24 text-center md:mt-36">
        <motion.h1 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-[84px] leading-tight font-bold uppercase tracking-tight max-w-5xl text-black">
            Earn extra income with your marketing skills
        </motion.h1>
        <motion.p 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-4 text-sm text-black/70 md:text-base">
            Find your next project on ClickTalent.
        </motion.p>
        <motion.button
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="px-10 py-4 text-[22px] mt-6 font-medium text-white bg-black rounded-full shadow"
        >
          Apply as a Marketer
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
