import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../assets/heroimage_1.png";
import image2 from "../../../assets/heroimage_2.png";
import image3 from "../../../assets/heroimage_3.png";
import image4 from "../../../assets/heroimage_4.png";
import image5 from "../../../assets/heroimage_5.png";
import image6 from "../../../assets/heroimage_6.png";
import image7 from "../../../assets/heroimage_7.png";
import image8 from "../../../assets/heroimage_8.png";
import image9 from "../../../assets/heroimage_9.png";

const steps = [
  {
    number: 1,
    title: "Share your goals",
    description: "Share your marketing goals, and let us fill in the rest.",
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
                : text === "Database marketing"
                ? "text-blue-600 border-blue-400"
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
    title: "Get matches",
    description: "Get vetted matches with the right marketers to choose from.",
    content: (
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {[
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          image7,
          image8,
          image9,
        ].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Person ${i + 1}`}
            className="object-cover w-12 h-20 rounded-[9999px] border border-white shadow -ml-2 first:ml-0"
            style={{ opacity: i > 5 ? 0.3 : 1 }}
          />
        ))}
      </div>
    ),
  },
  {
    number: 3,
    title: "Hire and manage",
    description: "Hire an expert, start the work, and let us handle the admin.",
    content: (
      <div>
        <div className="flex items-start justify-center mt-4 space-x-3">
          {/* Icon */}
          <div className="relative top-[7rem]">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
              {/* You can replace this emoji with an <img src="/your-logo.png" /> */}
              <span className="text-xl text-white">👋</span>
            </div>
          </div>

          {/* Message box */}
          <div className="bg-white p-4 rounded-xl shadow w-[300px] text-left text-sm">
            <p className="font-semibold text-gray-600">YourCompany · 4:55 PM</p>
            <p className="mt-2 text-gray-800">
              Hi, we’ve loved your profile and are excited to talk more about
              this project. What time would be best to schedule a call tomorrow?
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded-xl shadow w-[300px] text-left text-sm mt-2 flex gap-4">
          <p className="text-sm font-medium text-gray-500 ">Filip Wroblewski</p>
          <p className="text-sm text-gray-500  opacity-20">4:55 PM</p>
        </div>
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

const StepsSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-white md:px-12">
      <div className="uppercase text-2xl md:text-[40px] font-bold text-center mb-8 md:mb-16">
        <div>Three Simple Steps</div>
      </div>
      <div className="flex flex-col gap-12 mx-auto text-center  md:grid md:max-w-6xl md:grid-cols-3">
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

export default StepsSection;
