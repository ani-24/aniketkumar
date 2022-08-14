import Image from "next/image";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

const Projects = [
  {
    img: "/project-1.png",
    title: "Pace Institute Pvt. Ltd.",
    link: "https://paceinstitute.vercel.app/",
    skills: ["html", "sass", "tailwind", "react", "next"],
  },
  {
    img: "/project-2.png",
    title: "Satyadev Super Speciality Hospital",
    link: "https://satyadevurology.vercel.app/",
    skills: ["html", "sass", "react", "next", "sanity"],
  },
];

const projects = () => {
  return (
    <>
      <Navbar />
      <div className="projects">
        <div className="container">
          {Projects.map((proj) => (
            <Project
              img={proj.img}
              title={proj.title}
              link={proj.link}
              skills={proj.skills}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default projects;
