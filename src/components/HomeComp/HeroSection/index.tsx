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
  // Tailwind w-14 → 3.5rem → 56px, gap-4 → 1rem → 16px
  const ITEM_WIDTH = 56;
  const GAP = 16;
  // total shift = one full set of images sliding off
  const SHIFT = (ITEM_WIDTH + GAP) * images.length; // 72px * 10 = 720px
  return (
    <div className="m-2 overflow-hidden rounded-2xl bg-heroBlue">
      {/* Navbar */}
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      {/* Headline + search */}
      <div className="flex flex-col items-center justify-center px-4 mt-20 text-center">
        <h1 className="text-5xl max-w-4xl tracking-[-6px] font-bold leading-none text-black md:text-[104px]">
          HIRE EXPERT MARKETERS ON DEMAND.
        </h1>
        <p className="max-w-md mt-6 text-sm md:text-[16px] text-black/70">
          Reach your business goals faster with the right fractional experts — matched to your needs.
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
      {/* Seamless carousel */}
      <div className="w-full mt-24 overflow-hidden bg-heroBlue">
        <motion.div
          className="flex flex-nowrap gap-4"
          initial={{ x: 0 }}
          animate={{ x: -SHIFT }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* three copies back‑to‑back */}
          {[...images, ...images, ...images, ...images].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`marketer-${idx}`}
              className="flex-none object-cover h-20 w-14 rounded-t-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default HeroSection;