import { useState } from "react";
import logo from "../../../assets/logo.png";
const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4">
        {/* <div className="text-2xl font-black">L</div> */}
        <img src={logo} alt="Logo" className="w-6 h-6" />

        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-full"
            onClick={() => setMenuOpen(true)}
          >
            Apply as a Marketer
          </button>
          <button
            className=""
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="w-5 h-1 bg-gray-600 rounded-lg mb-2"></div>

            <div className="w-5 h-1 bg-gray-600 rounded-lg"></div>
          </button>
        </div>
      </div>

      {/* Slide-out menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full bg-white z-50 flex flex-col p-4">
          <div className="flex items-center justify-between mb-6">
            {/* <div className="text-2xl font-black">L</div> */}
            <img src={logo} alt="Logo" className="w-6 h-6" />
            <div className="flex items-center gap-4">
              <button
                className="px-4 text-sm py-2 font-semibold text-white bg-black rounded-full"
                onClick={() => setMenuOpen(true)}
              >
                Apply
              </button>
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
            <a
              href="/marketing"
              className="text-lg font-medium   text-gray-800"
            >
              For Marketers
            </a>
            <hr className="" />
            <a href="#" className="text-lg font-medium text-gray-800  pb-2">
              Log In
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
