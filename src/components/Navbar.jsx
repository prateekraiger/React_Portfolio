import logo from "../assets/profilelogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6 = useContext(second)">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="image logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedinIn />
        <FaGithub />
        <FaTwitterSquare />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
