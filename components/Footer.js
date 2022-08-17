import Link from "next/link";
import { FaCodepen, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className="links-list">
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact me</a>
            </Link>
          </li>
          <li>
            <Link href="skills">
              <a>Skills</a>
            </Link>
          </li>
        </ul>
        <ul className="social-list">
          <li>
            <Link href="https://codepen.io/aniketkr" rel="noreferrer">
              <a>
                <FaCodepen />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/ani-24" rel="noreferrer">
              <a>
                <FaGithub />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
