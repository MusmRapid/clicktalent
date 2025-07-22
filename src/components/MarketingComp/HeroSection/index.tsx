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

  return (
    <div className="relative pb-32 m-2 md:pb-2 overflow-hidden rounded-3xl bg-marketGreen md:min-h-[850px]">
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
          className={`block absolute 
            w-16 h-28 md:w-20 md:h-44 
            object-cover rounded-t-full rounded-b-full 
            z-0
            ${idx === 0 ? "left-2 top-20 md:left-20 md:top-32" : ""}
            ${idx === 1 ? "right-2 top-20 md:right-12 md:top-32" : ""}
            ${idx === 2 ? "left-2 hidden md:block top-[60%] md:left-4 md:top-[60%]" : ""}
            ${idx === 3 ? "right-2 top-[55%] hidden md:block md:right-28 md:top-[55%]" : ""}
            ${idx === 4 ? "left-[10%] bottom-4 md:left-[20%] md:bottom-10" : ""}
            ${
              idx === 5
                ? "right-[10%] -bottom-6 md:right-[30%] md:-bottom-12"
                : ""
            }
          `}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-4 mt-24 text-center md:mt-36">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-[3.5rem] max-w-4xl tracking-[-2px] font-bold leading-none text-black md:text-[4.5rem] lg:text-[104px] uppercase"
        >
          Earn extra income with your marketing skills
        </motion.h1>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-4 text-sm text-black/70 md:text-base"
        >
          Find your next project on ClickTalent.
        </motion.p>
        <motion.button
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="px-6 md:px-10 py-2 md:py-4 text-lg font-semibold md:text-[22px] mt-6  text-white bg-black rounded-full shadow"
        >
          Apply as a Marketer
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
