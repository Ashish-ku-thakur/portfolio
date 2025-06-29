import Logo from "../assets/react.svg";
import ashish from "../assets/Ashish Photo (2).jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Left - Avatar or Logo */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback>AS</AvatarFallback>
            <AvatarImage
              src={ashish}
              alt="Ashish"
              className="object-cover object-center"
            />
          </Avatar>
          <span className="font-bold hidden sm:inline">Ashish Kumar</span>
        </div>

        {/* Center - Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <AnchorLink href="#home" className="hover:text-orange-500">
            Home
          </AnchorLink>
          <AnchorLink href="#about" className="hover:text-orange-500">
            About Me
          </AnchorLink>
          <AnchorLink href="#projects" className="hover:text-orange-500">
            Projects
          </AnchorLink>
          <AnchorLink href="#contect" className="hover:text-orange-500">
            Contact
          </AnchorLink>
        </nav>

        {/* Right - Connect Button */}
        <div className="hidden sm:block">
          <AnchorLink href="#contect">
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition-transform">
              Connect with me
            </button>
          </AnchorLink>
        </div>

        <div className="md:hidden text-gray-700">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="h-7 w-7" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <AnchorLink href="#home">
                <DropdownMenuItem id="#home">Home</DropdownMenuItem>
              </AnchorLink>
              <AnchorLink href="#about">
                <DropdownMenuItem>About me</DropdownMenuItem>
              </AnchorLink>
              <AnchorLink href="#projects">
                 <DropdownMenuItem>Projects</DropdownMenuItem>
              </AnchorLink>
              <AnchorLink href="#contect">
                <DropdownMenuItem>Contect</DropdownMenuItem>
              </AnchorLink>

             
             
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Nav (optional) */}
      {/* You can later add a hamburger menu here if needed */}
    </header>
  );
};

export default Navbar;
