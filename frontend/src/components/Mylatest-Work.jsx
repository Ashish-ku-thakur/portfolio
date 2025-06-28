import { Link } from "react-router-dom";
import apna_course from "../assets/apna-course.png";
import content_green from "../assets/content-green.png";

const Mylatest = () => {
  const arr = [
    {
      imgUrl: apna_course,
      link: "https://apna-course-flame.vercel.app",
    },
    {
      imgUrl: content_green,
      link: "https://content-green.vercel.app",
    },
  ];
 
  return (
    <div id="projects" className="h-screen w-screen">
      <h1 className="font-bold text-5xl text-center mt-10">My Projects</h1>

      <div className="h-[70%] w-[90%] mx-auto flex items-center justify-center gap-4">
        {arr.map((ele, index) => (
          <Link
            to={ele.link}
            key={index}
            className="h-[60%] w-[40%]"
          >
            <img
              src={ele.imgUrl}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mylatest;
