import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosPaperPlane } from "react-icons/io";

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="contact">
          <div className="contact__section contact__section--left">
            <div className="contact__section--left__box">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <p>+91 9204613799, +91 9973860205</p>
            </div>
            <div className="contact__section--left__box">
              <div className="icon">
                <FaEnvelope />
              </div>
              <p>aniketkumar2427@gmail.com, rajeshwar9204@gmail.com</p>
            </div>
            <div className="contact__section--left__box">
              <div className="icon">
                <RiWhatsappFill />
              </div>
              <p>+91 9973860205</p>
            </div>
          </div>
          <div className="contact__section contact__section--right">
            <form action="#">
              <div className="input-field">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input type="text" className="form-input" id="name" />
              </div>
              <div className="input-field">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input type="text" className="form-input" id="email" />
              </div>
              <div className="input-field">
                <label htmlFor="msg" className="form-label">
                  Message:
                </label>
                <textarea
                  type="text"
                  className="form-input form-textarea"
                  id="msg"
                ></textarea>
              </div>
              <button type="submit" className="submit">
                Send <IoIosPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
