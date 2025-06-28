import ashish from "../assets/Ashish Photo (2).jpeg";
import { AspectRatio } from "./ui/aspect-ratio";

const About = () => {
  return (
    <div id="about" className="min-h-screen px-10 md:px-20 py-10 flex flex-col mx-auto">
      <div className="text-5xl text-center font-bold mb-10">
        <h1>About Me</h1>
      </div>

      <div className="grid grid-cols-3">
        <section className="grid col-span-1">
          <AspectRatio ratio={16 / 9}>
            <img
              className="h-[100%] w-[70%] object-cover object-center"
              src={ashish}
              alt="Landscape photograph by Tobias Tullius"
            />
          </AspectRatio>
        </section>

        {/* Content Section */}
        <section className="grid col-span-2">
          <div className="w-full ">
            <h1>
              Hello! I'm <strong className="">Ashish Kumar Thakur</strong>, a
              passionate and dedicated Full Stack Web Developer specializing in
              the MERN stack (MongoDB, Express.js, React, Node.js). As a
              fresher, I am enthusiastic about building real-world web
              applications that are fast, responsive, and user-friendly.
              <br />
              <br />
              I take pride in writing clean, maintainable code and constantly
              strive to improve my skills by learning new technologies and best
              practices. I am a strong believer in dedication, discipline, and
              teamwork.
              <br />
              <br />I am currently seeking an opportunity to join a dynamic team
              where I can contribute to challenging projects and enhance my
              technical and professional growth. Let's build something amazing
              together!
            </h1>
          </div>

          <h1 className="mt-10 text-center font-bold text-4xl underline">
            Skills
          </h1>
          <div className="grid grid-cols-3 mt-10 font-bold text-2xl">
            <div>
              <h3>React.js</h3>
              <h3>Redux/toolkit</h3>
              <h3>React-redux</h3>
              <h3>RTK-Query</h3>
              <h3>Tailwind-(CSS)</h3>
              <h3>Shadcn-(UI)</h3>
            </div>
            <div>
              <h3>Node.js</h3>
              <h3>Express.js</h3>
              <h3>MongoDB</h3>
              <h3>Prisma (ORM)</h3>
              <h3>JWT (Auth)</h3>
              <h3>ZOD (Validation)</h3>
            </div>
            <div>
              <h3>Redis</h3>
              <h3>Docker</h3>
              <h3>RabbitMQ</h3>
            </div>
          </div>
        </section>
      </div>

      <h1 className="mt-20 text-center font-bold text-4xl">Intrest</h1>

      <div className="flex items-center justify-center w-full mt-10 font-bold">
        <div className="flex items-center gap-10 text-xl font-extrabold">
          <div>
            <h3>Kafka</h3>
            <h3>Valkey</h3>
            <h3>Kubernaties</h3>
          </div>
          <div>
            <h3>AWS</h3>
            <h3>CI/CD (Pipeline)</h3>
            <h3>AI Intigration</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
