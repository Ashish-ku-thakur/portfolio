import AnchorLink from "react-anchor-link-smooth-scroll";
import ashish from "../assets/Ashish Photo (2).jpeg";
import { Button } from "./ui/button";

const Body = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-between h-[100%]"
    >
      <div className="h-48 w-48 rounded-full overflow-hidden mt-[5%]">
        <img
          src={ashish}
          alt="Profile"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className=" space-y-4">
        <div className="text-center">
          <span className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            I am Ashish Kumar Thakur
          </span>
        </div>

        <div className="space-y-3 flex items-center justify-center flex-col text-center">
          <h1 className="font-semibold text-2xl w-[70%] mt-2">
            MERN Stack Skills: React, Tailwind CSS,shadcn UI, Node.js, Express,
            MongoDB, Prisma (ORM) REST APIs, Cookies, JWT Auth,
          </h1>

          <h3 className="w-[80%] mt-7">
            I am a passionate MERN fresher, seeking opportunities to enhance my
            skills in React, Tailwind CSS, Node.js, MongoDB, and REST APIs by
            contributing to real-world projects.
          </h3>
        </div>
      </div>

      <div className="space-x-4 mb-5">
        <Button className=" bg-gradient-to-r from-orange-400 to-pink-400">
          <AnchorLink href="#contect">Connect with me</AnchorLink>
        </Button>
        {/* <Button>My resume</Button> */}
      </div>
    </div>
  );
};

export default Body;
