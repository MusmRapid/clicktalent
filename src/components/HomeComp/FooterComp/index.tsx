import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
interface FooterProps {
  mainText?: string;
  yellowText?: string;
  buttonText?: string;
}
const FooterComp: React.FC<FooterProps> = ({
  mainText,
  yellowText,
  buttonText,
}) => {
  return (
    <div className="flex flex-col overflow-hidden text-white bg-black pt-8 md:pt-14 rounded-2xl w-full">
      <div className="flex items-center  justify-center px-10 py-20 md:px-20 md:py-32 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold uppercase ">{mainText}</h1>
          <p className="mt-2 text-4xl font-bold text-[#F3E16C] uppercase ">
            {yellowText}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 mt-6 font-medium text-black bg-white rounded-full shadow"
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>

      <footer className="w-full">
        <div className="flex items-center justify-between w-full max-w-5xl gap-4 px-6 py-4 m-auto text-sm border-t border-gray-800 md:gap-4 md:flex-row">
          <div className="font-bold">ClickTalent</div>
          <div>
            <div className="hidden md:flex flex-col w-full max-w-5xl gap-8 m-auto  border-gray-800 md:gap-4 md:flex-row">
              <Link
                to="/"
                className="text-gray-500 font-semibold hover:underline"
              >
                For Employers
              </Link>
              <Link
                to="/marketing"
                className="text-gray-500 font-semibold hover:underline"
              >
                For Marketing Talent
              </Link>
              <Link
                to="#"
                className="text-gray-500 font-semibold hover:underline"
              >
                Terms
              </Link>
              <Link
                to="#"
                className="text-gray-500 font-semibold hover:underline"
              >
                Privacy
              </Link>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="#" className="text-xl hover:opacity-75">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col w-full max-w-5xl gap-8 px-6 pb-4  m-auto  border-gray-800 md:gap-4 md:flex-row">
            <Link
              to="/"
              className="text-gray-500 font-semibold hover:underline"
            >
              For Employers
            </Link>
            <Link
              to="/marketing"
              className="text-gray-500 font-semibold hover:underline"
            >
              For Marketing Talent
            </Link>
            <Link
              to="#"
              className="text-gray-500 font-semibold hover:underline"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="text-gray-500 font-semibold hover:underline"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComp;
