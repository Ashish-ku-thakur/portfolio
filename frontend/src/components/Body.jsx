import AnchorLink from "react-anchor-link-smooth-scroll";
import ashish from "../assets/Ashish Photo (2).jpeg";
import { Button } from "./ui/button";

const Body = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-between min-h-screen px-4 py-10 md:px-8"
    >
      {/* Profile Image */}
      <div className="h-36 w-36 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full overflow-hidden mb-6">
        <img
          src={ashish}
          alt="Profile"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Name and Description */}
      <div className="space-y-6 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
          I am Ashish Kumar Thakur
        </h1>

        <p className="font-semibold text-base sm:text-lg md:text-2xl max-w-2xl mx-auto px-2">
          MERN Stack Skills: React, Tailwind CSS, shadcn UI, Node.js, Express,
          MongoDB, Prisma (ORM), REST APIs, Cookies, JWT Auth
        </p>

        <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
          I am a passionate MERN fresher, seeking opportunities to enhance my
          skills in React, Tailwind CSS, Node.js, MongoDB, and REST APIs by
          contributing to real-world projects.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row items-center">
        <Button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white">
          <AnchorLink href="#contect" className="w-full h-full block px-4 py-2">
            Connect with me
          </AnchorLink>
        </Button>

        {/* Future Resume Button Placeholder */}
        {/* <Button>My Resume</Button> */}
      </div>
    </div>
  );
};

export default Body;
