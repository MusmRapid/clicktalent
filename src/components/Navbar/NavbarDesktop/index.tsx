import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const NavbarDesktop = ({}) => {
  return (
    <div className="flex items-center justify-between pt-10 md:px-6 md:py-6">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-8 h-8" />

        <div className="flex items-center gap-2">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 font-semibold text-black rounded-md bg-black/10"
                : "px-3 py-1 font-semibold text-black/70 rounded-md hover:bg-black/5"
            }
          >
            For Employers
          </NavLink>
          <NavLink
            to={"/marketing"}
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 font-semibold text-black rounded-md bg-black/10"
                : "px-3 py-1 font-medium text-black/70 rounded-md hover:bg-black/5"
            }
          >
            For Marketing Talent
          </NavLink>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="font-medium text-black">
          <Link to="https://app.clicktalent.com/login" target="_blank">
            Log In
          </Link>
        </button>
        <button className="px-4 py-2 font-semibold text-white bg-black rounded-full">
          <Link
            to="https://app.clicktalent.com/signup/account?type=talent"
            target="_blank"
          >
            Apply as a Marketer
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavbarDesktop;
