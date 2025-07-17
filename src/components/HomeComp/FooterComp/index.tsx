import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const FooterComp = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden text-white bg-black pt-14 md:rounded-2xl">
      <div className="flex items-center justify-center px-20 py-32 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl font-bold uppercase sm:text-4xl">
            LOOKING TO HIRE A HIGH QUALITY MARKETER?
          </h1>
          <p className="mt-2 text-xl font-bold text-[#F3E16C] uppercase sm:text-2xl">
            SCHEDULE A CALL TODAY.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 mt-6 font-medium text-black bg-white rounded-full shadow"
          >
            Start Hiring
          </motion.button>
        </motion.div>
      </div>

     <footer className="flex flex-col items-center justify-between w-full max-w-5xl gap-4 px-6 py-4 m-auto text-sm border-t border-gray-800 md:gap-4 md:flex-row">
        <div className="font-bold">ClickTalent</div>
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-6 md:text-left">
          <a href="#" className="text-gray-400 hover:underline">For Employers</a>
          <a href="#" className="text-gray-400 hover:underline">For Marketing Talent</a>
          <a href="#" className="text-gray-400 hover:underline">Terms</a>
          <a href="#" className="text-gray-400 hover:underline">Privacy</a>
          </div>
           <div className="mt-4 md:mt-0">
          <a href="#" className="text-xl hover:opacity-75">
            <FaLinkedin />
          </a>
           </div>
      </footer>
    </div>
  );
};

export default FooterComp;
