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
    <div id="projects" className="min-h-screen w-full px-4 py-10">
      {/* Heading */}
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-12">
        My Projects
      </h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {arr.map((ele, index) => (
          <Link
            to={ele.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={ele.imgUrl}
              alt={`Project ${index + 1}`}
              className="w-full h-60 sm:h-72 object-cover object-center"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mylatest;
