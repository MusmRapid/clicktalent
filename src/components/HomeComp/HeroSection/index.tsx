import React from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import image1 from "../../../assets/heroimage_1.png";
import image2 from "../../../assets/heroimage_2.png";
import image3 from "../../../assets/heroimage_3.png";
import image4 from "../../../assets/heroimage_4.png";
import image5 from "../../../assets/heroimage_5.png";
import image6 from "../../../assets/heroimage_6.png";
import image7 from "../../../assets/heroimage_7.png";
import image8 from "../../../assets/heroimage_8.png";
import image9 from "../../../assets/heroimage_9.png";
import image10 from "../../../assets/heroimage_10.png";
import NavbarDesktop from "../../Navbar/NavbarDesktop";
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];
const HeroSection: React.FC = () => {
  const ITEM_WIDTH = 56;
  const GAP = 16;
  const SHIFT = (ITEM_WIDTH + GAP) * images.length;
  return (
    <div className="relative m-2 overflow-hidden rounded-3xl bg-heroBlue md:min-h-[850px] flex flex-col justify-between">
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="flex flex-col items-center justify-center px-4 mt-20 text-center">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-[3.5rem] max-w-4xl tracking-[-6px] font-bold leading-none text-black md:text-[4.5rem] lg:text-[104px]"
        >
          HIRE EXPERT MARKETERS ON DEMAND.
        </motion.h1>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="max-w-md mt-6 text-sm md:text-[16px] text-black/70"
        >
          Reach your business goals faster with the right fractional experts —
          matched to your needs.
        </motion.p>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-md mt-6"
        >
          <input
            type="text"
            placeholder="What marketing talent are you looking for?"
            className="w-full px-5 py-3 text-sm rounded-full outline-none"
          />
          <div className="absolute p-3 -translate-y-1/2 bg-black rounded-full right-2 top-1/2">
            <FaSearch className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="w-full mt-24 overflow-hidden bg-heroBlue"
      >
        <motion.div
          className="flex gap-4 flex-nowrap"
          initial={{ x: 0 }}
          animate={{ x: -SHIFT }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...images, ...images, ...images, ...images].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`marketer-${idx}`}
              className="flex-none object-cover h-20 rounded-t-full w-14"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default HeroSection;
