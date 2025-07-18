import React from "react";
import { FaSearch } from "react-icons/fa";

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
  // Duplicate tags array so 50% scroll covers one set
  const tags = [...marketingTags, ...marketingTags];
  return (
    <div className="relative overflow-hidden">
      <div className={`scroll-track flex gap-10 ${reverse ? 'reverse' : ''}`}>
        {tags.map((tag, idx) => (
          <div key={idx} className="flex items-center text-3xl font-black shrink-0">
            <span className={`px-3 py-1 mr-3 text-black rounded-full ${tag.color}`}>{tag.icon}</span>
            {tag.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const MarketingScroller: React.FC = () => (
  <div className="px-4 py-16 text-center">
    <h2 className="mb-8 text-lg md:text-[24px] font-semibold">
      Marketing experts across disciplines
    </h2>
    <div className="space-y-6">
      <ScrollingRow reverse />
      <ScrollingRow />
      <ScrollingRow reverse />
    </div>
    <p className="mt-10 text-gray-600">
      Find the right fractional marketer to reach your goals.
    </p>
    <button className="px-6 py-2 mt-4 font-semibold text-white bg-black rounded-full hover:bg-gray-900">
      Start Hiring
    </button>
    <style jsx>{`
      .scroll-track {
        display: flex;
        width: 200%;
        animation: scroll 10s linear infinite;
      }
      .scroll-track.reverse {
        animation-direction: reverse;
      }
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

export default MarketingScroller;
