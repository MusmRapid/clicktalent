import { motion } from "framer-motion";
import React from "react";

const marketingTags = [
  { label: "PRODUCT MARKETING", icon: "PM", color: "bg-yellow-300" },
  { label: "DIGITAL MARKETING", icon: "DM", color: "bg-yellow-400" },
  { label: "CONTENT MARKETING", icon: "CM", color: "bg-green-300" },
  { label: "COPYWRITER", icon: "CW", color: "bg-blue-300" },
  { label: "MOBILE FIRST", icon: "MF", color: "bg-purple-300" },
  { label: "EMAIL MARKETING", icon: "EM", color: "bg-orange-300" },
  { label: "SOCIAL MEDIA MARKETER", icon: "SM", color: "bg-pink-300" },
  { label: "GROWTH MARKETING", icon: "GM", color: "bg-amber-300" },
];

const ScrollingRow: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
  const direction = reverse ? 1 : -1;

  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-10"
        animate={{ x: [`0%`, `${direction * -50}%`] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        {[...marketingTags, ...marketingTags].map((tag, idx) => (
          <div
            key={idx}
            className="flex items-center text-3xl font-black shrink-0"
          >
            <span
              className={`px-3 py-1 mr-3 text-black rounded-full ${tag.color}`}
            >
              {tag.icon}
            </span>
            {tag.label}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MarketingScroller = () => {
  return (
    <div className="px-4 py-16 text-center">
      <h2 className="mb-8 tedxt-lg md:text-[24px] font-semibold">
        Marketing experts across disciplines
      </h2>

      <div className="space-y-6">
        <ScrollingRow reverse={true} />
        <ScrollingRow reverse={false} />
        <ScrollingRow reverse={true} />
      </div>

      <p className="mt-10 text-gray-600">
        Find the right fractional marketer to reach your goals.
      </p>
      <button className="px-6 py-2 mt-4 font-semibold text-white bg-black rounded-full hover:bg-gray-900">
        Start Hiring
      </button>
    </div>
  );
};

export default MarketingScroller;
