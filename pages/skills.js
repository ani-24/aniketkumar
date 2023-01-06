import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skills from "../data/Skills";

const skills = () => {
  return (
    <div>
      <Navbar />
      <div className="skills container">
        <div className="skills__box">
          <h2 className="skills__box__title">Frontend</h2>
          <div className="skills__box__skills">
            {Skills.Frontend.map((skill, idx) => (
              <div className="skills__box__skills__skill" key={idx}>
                <img src={`./${skill}.png`} alt={skill} />
                <span className="skills__box__skills__skill--name">
                  -- {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills__box">
          <h2 className="skills__box__title">Backend</h2>
          <div className="skills__box__skills">
            {Skills.Backend.map((skill, idx) => (
              <div className="skills__box__skills__skill" key={idx}>
                <img src={`./${skill}.png`} alt={skill} />
                <span className="skill--name">-- {skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default skills;
