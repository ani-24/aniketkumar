import Image from "next/image";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Frontend = [
  "html",
  "css",
  "js",
  "react",
  "next",
  "sass",
  "bootstrap",
  "tailwind",
];

const Backend = ["node", "express", "mongodb", "firebase", "php", "mysql"];

const skills = () => {
  return (
    <div>
      <Navbar />
      <div className="skills container">
        <div className="skills__box">
          <h2 className="skills__box__title">Frontend</h2>
          <div className="skills__box__skills">
            {Frontend.map((skill, idx) => (
              <Image
                height={50}
                width={50}
                src={`/${skill}.png`}
                alt={skill}
                key={idx}
              />
            ))}
          </div>
        </div>
        <div className="skills__box">
          <h2 className="skills__box__title">Backend</h2>
          <div className="skills__box__skills">
            {Backend.map((skill, idx) => (
              <Image
                height={50}
                width={50}
                src={`/${skill}.png`}
                alt={skill}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default skills;
