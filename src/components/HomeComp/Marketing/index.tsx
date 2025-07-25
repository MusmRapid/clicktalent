import React from "react";
import { motion } from "framer-motion";
import CM from "../../../assets/scrollingImages/cm.svg";
import CW from "../../../assets/scrollingImages/cw.svg";
import DM from "../../../assets/scrollingImages/dm.svg";
import EM from "../../../assets/scrollingImages/em.svg";
import GM from "../../../assets/scrollingImages/gm.svg";
import SM from "../../../assets/scrollingImages/sm.svg";

type Tag = {
  label: string;
  icon: string;
  color: string;
};

const marketingTags1: Tag[] = [
  { label: "DIGITAL MARKETING", icon: DM, color: "bg-yellow-400" },
  { label: "CONTENT MARKETING", icon: CM, color: "bg-green-300" },
];
const marketingTags2: Tag[] = [
  { label: "COPYWRITER", icon: CW, color: "bg-blue-300" },
  { label: "EMAIL MARKETING", icon: EM, color: "bg-orange-300" },
];
const marketingTags3: Tag[] = [
  { label: "SOCIAL MEDIA MARKETER", icon: SM, color: "bg-pink-300" },
  { label: "GROWTH MARKETING", icon: GM, color: "bg-amber-300" },
];

const ScrollingRow: React.FC<{ tags: Tag[]; reverse?: boolean }> = ({
  tags,
  reverse = false,
}) => {
  const repeatedTags = [...tags, ...tags, ...tags]; 
  const direction = reverse ? 1 : -1;
  const duration = 30;

  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-10"
        animate={{ x: [`0%`, `${direction * -50}%`] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        }}
      >
        {repeatedTags.map((tag, idx) => (
          <div
            key={idx}
            className="flex items-center text-2xl font-black md:text-3xl shrink-0"
          >
            <span
              className={`px-3 py-2 mr-3 text-black rounded-full ${tag.color}`}
            >
              <img src={tag.icon} className="w-10" alt={tag.label} />
            </span>
            {tag.label}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MarketingScroller: React.FC = () => (
  <div className="px-4 py-16 text-center">
    <h2 className="mb-8 text-lg md:text-[24px] font-semibold">
      Marketing experts across disciplines
    </h2>
    <div className="space-y-6">
      <ScrollingRow tags={marketingTags1} reverse />
      <ScrollingRow tags={marketingTags2} />
      <ScrollingRow tags={marketingTags3} reverse />
    </div>
    <p className="mt-10 text-gray-600">
      Find the right fractional marketer to reach your goals.
    </p>
    <button className="px-6 py-2 mt-4 font-semibold text-white bg-black rounded-full hover:bg-gray-900">
      Start Hiring
    </button>
  </div>
);

export default MarketingScroller;
