import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-4">
        <img src={logo} alt="Logo" className="w-6 h-6" />

        <div className="flex items-center gap-4">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-black rounded-full"
          >
            <Link
              to="https://app.clicktalent.com/signup/account?type=talent"
              target="_blank"
              className="flex items-center px-4 py-2 text-sm font-semibold text-white"
            >
              Apply
              <AnimatePresence mode="wait" initial={false}>
                {!menuOpen && (
                  <motion.span
                    key="extra"
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-1 whitespace-nowrap"
                  >
                    as a Marketer
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>

          <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <div className="w-5 h-1 mb-2 bg-gray-600 rounded-lg"></div>
            <div className="w-5 h-1 bg-gray-600 rounded-lg"></div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 z-50 flex flex-col w-full p-4 bg-white">
          <div className="flex items-center justify-between mb-6">
            <img src={logo} alt="Logo" className="w-6 h-6" />
            <div className="flex items-center gap-4">
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-black rounded-full"
              >
                <Link
                  to="https://app.clicktalent.com/signup/account?type=talent"
                  target="_blank"
                  className="flex items-center px-4 py-2 text-sm font-semibold text-white"
                >
                  Apply
                </Link>
              </motion.div>

              <button
                className="text-xl"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                &#x2715;
              </button>
            </div>
          </div>
          <nav className="flex flex-col gap-4 space-y-2">
            <a href="/" className="text-lg font-medium text-gray-800">
              For Employers
            </a>
            <a href="/marketing" className="text-lg font-medium text-gray-800">
              For Marketers
            </a>
            <hr />
            <a href="#" className="pb-2 text-lg font-medium text-gray-800">
              Log In
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
