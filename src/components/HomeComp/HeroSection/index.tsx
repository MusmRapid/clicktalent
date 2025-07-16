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
  return (
    <div className="overflow-hidden rounded-2xl bg-heroBlue m-2">
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>

      <div className="flex flex-col items-center justify-center px-4 mt-20 text-center">
        <h1 className="text-5xl max-w-4xl tracking-[-6px] font-bold leading-none text-black md:text-[104px]">
          HIRE EXPERT MARKETERS ON DEMAND.
        </h1>
        <p className="max-w-md mt-6 text-sm md:text-[16px] text-black/70">
          Reach your business goals faster with the right fractional experts —
          matched to your needs.
        </p>

        <div className="relative w-full max-w-md mt-6">
          <input
            type="text"
            placeholder="What marketing talent are you looking for?"
            className="w-full px-5 py-3 text-sm rounded-full outline-none"
          />
          <div className="absolute p-3 -translate-y-1/2 bg-black rounded-full right-2 top-1/2">
            <FaSearch className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      <div className="w-full mt-24 overflow-hidden bg-heroBlue">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...images, ...images].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`image-${idx}`}
              className="object-cover h-20 rounded-t-full w-14"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
