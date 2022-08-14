import Image from "next/image";
import Navbar from "../components/Navbar";

const projects = () => {
  return (
    <>
      <Navbar />
      <div className="projects">
        <div className="container">
          <div className="project">
            <div className="project__img">
              <a
                href="https://paceinstitute.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/project-1.png"
                  alt="Pace Institute"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </div>
            <div className="project__text">
              <h2 className="project__text__title">Pace Institute Pvt. Ltd.</h2>
              <a
                className="project__text__btn"
                href="https://paceinstitute.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
              <p>Skills used:</p>
              <div className="project__text__skills">
                <div className="project__text__skills__skill project__text__skills__skill--html">
                  HTML
                </div>
                <div className="project__text__skills__skill project__text__skills__skill--sass">
                  Sass
                </div>
                <div className="project__text__skills__skill project__text__skills__skill--tailwind">
                  Tailwind CSS
                </div>
                <div className="project__text__skills__skill project__text__skills__skill--react">
                  React JS
                </div>
                <div className="project__text__skills__skill project__text__skills__skill--next">
                  Next JS
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__img">
              <a
                href="https://satyadevurology.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/project-2.png"
                  alt="Satyadev Super Speciality Hospital"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </div>
            <div className="project__text">
              <h2 className="project__text__title">
                Satyadev Super Speciality Hospital
              </h2>
              <a
                className="project__text__btn"
                href="https://satyadevurology.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
              <p>Skills used:</p>
              <div className="project__text__skills">
                <div className="project__text__skills__skill project__text__skills__skill--html">
                  HTML
                </div>
                <div className="project__text__skills__skill project__text__skills__skill--sass">
                  Sass
                </div>
                <div className="project__text__skills__skill project__text__skills__skill--react">
                  React JS
                </div>
                <div className="project__text__skills__skill project__text__skills__skill--next">
                  Next JS
                </div>
                <div className="project__text__skills__skill project__text__skills__skill--sanity">
                  Sanity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
