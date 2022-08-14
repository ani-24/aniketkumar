import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosPaperPlane } from "react-icons/io";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "emailjs-com";

const contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    let nameErr = false;
    let emailErr = false;
    let msgErr = false;
    if (name.value.length >= 3) {
      nameErr = true;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      emailErr = true;
    }
    if (message.value.length > 1) {
      msgErr = true;
    }
    if (!nameErr) {
      name.nextElementSibling.innerHTML = "*Invalid credentials";
    } else {
      name.nextElementSibling.innerHTML = "";
    }
    if (!emailErr) {
      email.nextElementSibling.innerHTML = "*Invalid credentials";
    } else {
      email.nextElementSibling.innerHTML = "";
    }
    if (!msgErr) {
      message.nextElementSibling.innerHTML = "*Invalid credentials";
    } else {
      message.nextElementSibling.innerHTML = "";
    }
    if (nameErr && emailErr && msgErr) {
      emailjs
        .sendForm(
          "service_2la7m1o",
          "template_5u8e3l8",
          e.target,
          "_mwu7W44_eSioJwfN"
        )
        .then((res) => {
          toast("Email sent!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            type: "success",
            theme: "dark",
          });
          name.value = "";
          email.value = "";
          message.value = "";
        })
        .catch((err) => {
          toast("Error in sending your email");
          toast("Email sent!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            type: "error",
            theme: "dark",
          });
        });
    }
  };
  return (
    <>
      <ToastContainer />
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
            <form method="POST" onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  id="name"
                />
                <small></small>
              </div>
              <div className="input-field">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-input"
                  id="email"
                />
                <small></small>
              </div>
              <div className="input-field">
                <label htmlFor="msg" className="form-label">
                  Message:
                </label>
                <textarea
                  type="text"
                  className="form-input form-textarea"
                  id="msg"
                  name="message"
                ></textarea>
                <small></small>
              </div>
              <button type="submit" className="submit" name="button">
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
