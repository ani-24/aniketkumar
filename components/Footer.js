import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className="links-list">
          <li>
            <Link href="/projects">
              <a>Projects / Works</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact me</a>
            </Link>
          </li>
          <li>
            <Link href="about">
              <a>About me</a>
            </Link>
          </li>
        </ul>
        <ul className="social-list">
          <li>
            <Link href="https://codepen.io/aniketkr" rel="noreferrer">
              <a></a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
