import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link href="/">
          <a className="logo">Aniket. Kumar.</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
