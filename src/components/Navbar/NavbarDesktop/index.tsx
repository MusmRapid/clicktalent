import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
const NavbarDesktop = ({}) => {
  return (
    <div className="flex items-center justify-between pt-10 md:px-6 md:py-6">
      <div className="flex items-center gap-4">
        {/* <div className="text-2xl font-black">L</div> */}
        <img src={logo} alt="Logo" className="w-8 h-8" />

        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <div className="px-3 py-1 font-semibold text-black rounded-md bg-black/10">
              For Employers
            </div>
          </Link>
          <Link to={"/marketing"}>
            <div className="font-medium text-black/70">
              For Marketing Talent
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="font-medium text-black">Log In</button>
        <button className="px-4 py-2 font-semibold text-white bg-black rounded-full">
          Apply as a Marketer
        </button>
      </div>
    </div>
  );
};

export default NavbarDesktop;
