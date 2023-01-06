import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Projects from "../data/Projects";

const projects = () => {
  return (
    <>
      <Navbar />
      <div className="projects">
        <div className="container">
          {Projects.map((proj, index) => (
            <Project
              key={index}
              img={proj.img}
              title={proj.title}
              link={proj.link}
              skills={proj.skills}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default projects;
