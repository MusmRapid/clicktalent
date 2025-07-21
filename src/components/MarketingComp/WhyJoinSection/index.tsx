import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const badges = [
  "Content marketing",
  "Direct marketing",
  "Social media",
  "Database marketing",
  "Video marketing",
  "Influencer marketing",
  "Guerilla marketing",
  "Event marketing",
];

const WhyJoinSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-white md:px-12">
      <h2 className="mb-16 text-2xl font-extrabold text-center uppercase md:text-4xl">
        Why Elite Marketers Are Joining Our Community
      </h2>

      <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto text-center md:grid-cols-3">
        <motion.div
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-full max-w-xs p-4 border border-green-200 shadow-sm bg-green-50 rounded-xl">
            <p className="text-sm font-semibold text-left text-gray-800">Project completed!</p>
            <p className="text-sm text-left text-gray-600">
              Congratulations! A total of <span className="font-semibold text-black">$5,000.00</span> have been sent to your wallet.
            </p>
          </div>
          <h3 className="mt-6 text-lg font-semibold">Earn more</h3>
          <p className="max-w-xs mt-2 text-gray-700">Make more money with project-based work.</p>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="grid w-full max-w-xs grid-cols-2 gap-2 text-sm text-left text-gray-800">
            <div className="p-2 bg-gray-100 rounded">BUDGET<br /><strong>$8,000</strong></div>
            <div className="p-2 bg-gray-100 rounded">DURATION<br /><strong>1–2 months</strong></div>
            <div className="p-2 bg-gray-100 rounded">STARTING<br /><strong>Next 4 weeks</strong></div>
            <div className="p-2 bg-gray-100 rounded">COMMITMENT<br /><strong>20h/week</strong></div>
          </div>
          <h3 className="mt-6 text-lg font-semibold">On your schedule</h3>
          <p className="max-w-xs mt-2 text-gray-700">Choose your hours & when to take on projects.</p>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-wrap justify-center max-w-xs gap-2 mt-2">
            {badges.map((badge, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-sm rounded-full border ${
                  badge === "Social media"
                    ? "bg-pink-100 text-pink-700 font-semibold"
                    : badge === "Database marketing"
                    ? "text-blue-600 border-blue-400"
                    : "border-gray-300 text-gray-700"
                }`}
                style={{
                  opacity: ["Guerilla marketing", "Event marketing"].includes(badge)
                    ? 0.3
                    : 1,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
          <h3 className="mt-6 text-lg font-semibold">Own your destiny</h3>
          <p className="max-w-xs mt-2 text-gray-700">Choose the projects where you thrive.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
