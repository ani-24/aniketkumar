import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <Navbar />
      <div className="container center">
        <div>
          <Image src="/site-in-progress.png" height={400} width={400} />
          <p>Site in Progress</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
