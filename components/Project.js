import Image from "next/image";

const skillsName = {
  tailwind: "Tailwind CSS",
  html: "HTML",
  sass: "Sass",
  react: "React JS",
  next: "Next JS",
  sanity: "Sanity",
};

const Project = ({ img, title, link, skills }) => {
  return (
    <div className="project">
      <div className="project__img">
        <a href={link} target="_blank" rel="noreferrer">
          <Image
            src={img}
            alt="Pace Institute"
            layout="fill"
            objectFit="cover"
          />
        </a>
      </div>
      <div className="project__text">
        <h2 className="project__text__title">{title}</h2>
        <a
          className="project__text__btn"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          View Live
        </a>
        <p>Skills used:</p>
        <div className="project__text__skills">
          {skills.map((skill) => {
            console.log(skillsName[skill]);
            return (
              <div
                className={`project__text__skills__skill project__text__skills__skill--${skill}`}
              >
                {skillsName[skill]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;