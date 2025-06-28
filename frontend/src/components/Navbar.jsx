import Logo from "../assets/react.svg";
import ashish from "../assets/Ashish Photo (2).jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="w-full grid grid-cols-9 p-2">
      <div className="grid col-span-2">
        <Avatar className="h-10 w-10">
          <AvatarFallback>AS</AvatarFallback>
          <AvatarImage
            src={ashish}
            alt="logo"
            className="object-cover object-center"
          />
        </Avatar>
      </div>

      <div className="grid col-span-5">
        <nav className="flex items-center gap-7">
          <AnchorLink href="#home">
            {" "}
            <h3>Home</h3>
          </AnchorLink>

          <AnchorLink href="#about">
            {" "}
            <h3>About Me</h3>
          </AnchorLink>

          <AnchorLink href="#projects">
            {" "}
            <h3>Projects</h3>
          </AnchorLink>
          {/* 
          <AnchorLink href="#resume">
            {" "}
            <h3>Resume</h3>
          </AnchorLink> */}

          <AnchorLink href="#contect">
            {" "}
            <h3>Contect</h3>
          </AnchorLink>
        </nav>
      </div>

      <AnchorLink href="#contect" className="grid col-span-1">
        <button className="cursor-pointer p-0 m-0 rounded-full hover:bg-gradient-to-r from-orange-400 to-pink-500 text-white bg-gray-500">
          Connect with me
        </button>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
