import React from "react";
import { motion } from "framer-motion";
import { SiNike, SiHubspot, SiGoogletagmanager, SiSlack, SiZapier, SiTrello, SiArc } from "react-icons/si";

const steps = [
  {
    number: 1,
    title: "Apply",
    description: "Sign up and join a call.",
    content: (
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {[
          "Content marketing",
          "Direct marketing",
          "Social media",
          "Database marketing",
          "Video marketing",
          "Influencer marketing",
          "Guerilla marketing",
          "Event marketing",
        ].map((text, idx) => (
          <span
            key={idx}
            className={`px-3 py-1 text-sm rounded-full border ${
              text === "Social media"
                ? "bg-pink-100 text-pink-700 font-semibold"
                : "border-gray-300 text-gray-700"
            }`}
            style={{
              opacity: ["Guerilla marketing", "Event marketing"].includes(text)
                ? 0.3
                : 1,
            }}
          >
            {text}
          </span>
        ))}
      </div>
    ),
  },
  {
    number: 2,
    title: "Create",
    description: "Fill in your profile to market yourself.",
    content: (
      <div className="mt-4 w-[300px] mx-auto p-4 border rounded-xl bg-white shadow text-left text-sm">
        <p className="mb-2 font-semibold text-gray-700">Tell us about yourself</p>
        <label className="text-xs text-gray-500">What's your full name?</label>
        <input
          className="w-full px-3 py-2 mt-1 mb-3 text-sm border rounded"
          value="Johnny Silverhand"
          readOnly
        />
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Upload a photo of yourself</span>
          <span className="italic text-gray-400">vempicheadshot0001.png</span>
        </div>
      </div>
    ),
  },
  {
    number: 3,
    title: "Match",
    description: "Get matched to projects from companies.",
    content: (
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {[
          { icon: <SiArc />, label: "Arc" },
          { icon: <SiNike />, label: "Nike" },
          { icon: <SiGoogletagmanager />, label: "G" },
          { icon: <SiSlack />, label: "S" },
          { icon: <SiTrello />, label: "Trello" },
          { icon: <SiHubspot />, label: "HubSpot" },
          { icon: <SiZapier />, label: "Zapier" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center w-12 h-12 text-xl text-black rounded-xl bg-gradient-to-br from-blue-100 to-purple-100"
            style={{ opacity: idx >= 5 ? 0.3 : 1 }}
          >
            {item.icon}
          </div>
        ))}
      </div>
    ),
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const HowItWorks: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-white md:px-12">
      <div className="uppercase text-[40px] font-bold text-center mb-4 md:mb-16">
        Three Simple Steps
      </div>
      <div className="grid max-w-6xl gap-12 mx-auto text-center md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center w-8 h-8 mb-4 font-bold text-white bg-black rounded-full">
              {step.number}
            </div>
            <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
            {step.content}
            <p className="max-w-xs mt-4 text-black">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
