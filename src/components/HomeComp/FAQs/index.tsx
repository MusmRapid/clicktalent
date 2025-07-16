import React, { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { faqData } from "../../../utils/faqData";

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="px-6 py-20 bg-heroBack md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center uppercase md:text-[40px] text-textMoss">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-2">
          {faqData.map((faq, idx) => (
            <div className="px-4 bg-faqBack rounded-xl" key={idx}>
              <button
                className="flex items-center justify-between w-full py-5 font-medium text-left text-textMoss"
                onClick={() => toggleIndex(idx)}
              >
                <span className="text-md md:text-[24px] font-semibold">
                  {faq.question}
                </span>
                {activeIndex === idx ? (
                  <RxCross2 className="text-xl" />
                ) : (
                  <HiPlus className="text-xl" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 text-[16px] font-normal text-black">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
