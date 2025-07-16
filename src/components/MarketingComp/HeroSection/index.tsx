import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import image1 from "../../../assets/heroimage_1.png";
import image2 from "../../../assets/heroimage_2.png";
import image3 from "../../../assets/heroimage_3.png";
import image4 from "../../../assets/heroimage_4.png";
import image5 from "../../../assets/heroimage_5.png";
import image6 from "../../../assets/heroimage_6.png";

const HeroSection: React.FC = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const positions = [
    "top-32 left-8",
    "top-32 right-12",
    "top-[60%] left-4",
    "top-[65%] right-6",
    "bottom-10 left-[20%]",
    "bottom-10 right-[20%]",
  ];

  return (
    <div className="relative px-4 pt-6 pb-20 overflow-hidden rounded-2xl bg-marketGreen md:pt-10">
      {/* Navbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-black">L</div>
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <div className="font-medium text-black/70">For Employers</div>
            </Link>
            <Link to={"/marketing"}>
              <div className="px-3 py-1 font-semibold text-black rounded-md bg-black/10">
                For Marketing Talent
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="font-medium text-black">Log In</button>
          <button className="px-4 py-2 font-semibold text-white bg-black rounded-full">
            Apply as a Marketer
          </button>
        </div>
      </div>

      {/* Positioned Images (behind text but not overlapping) */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`decor-${idx}`}
          className={`hidden md:block absolute w-16 h-28 object-cover rounded-t-[40%] rounded-b-[40%] ${positions[idx]} z-0`}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 mt-24 text-center md:mt-36">
        <h1 className="text-4xl sm:text-5xl md:text-[84px] leading-tight font-bold uppercase tracking-tight max-w-5xl text-black">
          Earn extra income with your marketing skills
        </h1>
        <p className="mt-4 text-sm text-black/70 md:text-base">
          Find your next project on ClickTalent.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 mt-6 font-medium text-white bg-black rounded-full shadow"
        >
          Apply as a Marketer
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
