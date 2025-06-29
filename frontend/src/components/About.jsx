import ashish from "../assets/Ashish Photo (2).jpeg";
import { AspectRatio } from "./ui/aspect-ratio";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen px-4 md:px-10 lg:px-20 py-10 flex flex-col mx-auto"
    >
      {/* Heading */}
      <div className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-10">
        <h1>About Me</h1>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Image Section */}
        <section className="flex justify-center">
          <AspectRatio ratio={1}>
            <img
              className="rounded-xl object-cover object-center w-full h-full max-w-[300px] mx-auto"
              src={ashish}
              alt="Ashish Kumar Thakur"
            />
          </AspectRatio>
        </section>

        {/* Content Section */}
        <section className="md:col-span-2 space-y-6 text-base sm:text-lg">
          <div>
            <p>
              Hello! I'm <strong className="text-orange-500">Ashish Kumar Thakur</strong>, a passionate and
              dedicated Full Stack Web Developer specializing in the{" "}
              <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js).
              As a fresher, I am enthusiastic about building real-world web
              applications that are fast, responsive, and user-friendly.
            </p>

            <p>
              I take pride in writing clean, maintainable code and constantly
              strive to improve my skills by learning new technologies and best
              practices. I am a strong believer in dedication, discipline, and
              teamwork.
            </p>

            <p>
              I am currently seeking an opportunity to join a dynamic team
              where I can contribute to challenging projects and enhance my
              technical and professional growth. Let's build something amazing
              together!
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="mt-10 text-center font-bold text-2xl sm:text-3xl md:text-4xl underline">
              Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 font-semibold text-base sm:text-lg">
              <div className="space-y-2">
                <p>React.js</p>
                <p>Redux/Toolkit</p>
                <p>React-redux</p>
                <p>RTK-Query</p>
                <p>Tailwind CSS</p>
                <p>Shadcn UI</p>
              </div>
              <div className="space-y-2">
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
                <p>Prisma (ORM)</p>
                <p>JWT (Auth)</p>
                <p>ZOD (Validation)</p>
              </div>
              <div className="space-y-2">
                <p>Redis</p>
                <p>Docker</p>
                <p>RabbitMQ</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Interest Section */}
      <div className="mt-16">
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-10">
          Interests
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 font-semibold text-lg">
          <div className="space-y-2 text-center">
            <p>Kafka</p>
            <p>Valkey</p>
            <p>Kubernetes</p>
          </div>
          <div className="space-y-2 text-center">
            <p>AWS</p>
            <p>CI/CD (Pipeline)</p>
            <p>AI Integration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
