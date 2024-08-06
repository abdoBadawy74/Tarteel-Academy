import logo from "../../assets/logo.png";
import locationIcon from "../../assets/location-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import emailIcon from "../../assets/message-icon.svg";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/mqazqnpg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Email sent successfully!");
        } else {
          alert("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending email.");
      });
  };

  return (
    <div className="contact container d-flex gap-2 justify-content-between flex-wrap">
      <div className="form col-12 col-md-4">
        <h2
          className="course-title fw-bold position-relative"
          style={{ color: "#2F4858", fontSize: "50px" }}
        >
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="my-3">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="w-100 rounded border- p-2 outline-0"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="w-100 rounded border- p-2 outline-0"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              rows="3"
              className="w-100 rounded border- p-2 "
              placeholder="Content"
              value={formData.message}
              onChange={handleChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
                resize: "none",
                outline: "none",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn text-white fw-bold py-2 px-4"
            style={{
              width: "fit-content",
              fontSize: "25px",
              backgroundColor: "#01934A",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="form col-12 col-md-4">
        <p>
          Stay connected! Follow us on social media or send us a message here.
        </p>
        <img
          src={logo}
          alt="LOGO"
          width={"250px"}
          style={{
            display: "block",
            margin: "auto",
            marginBottom: "30px",
          }}
        />
        <div>
          <p>
            <img src={locationIcon} alt="locationIcon" /> Cairo, Egypt
          </p>
          <p>
            <img src={phoneIcon} alt="phoneIcon" /> +20 101 656 1419
          </p>
          <p>
            <img src={emailIcon} alt="emailIcon" /> tarteelalquran23@gmail.com
          </p>
        </div>
        <ul className="d-flex justify-content-end gap-2">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61563288365607&mibextid=ZbWKwL"
              target="_blank"
            >
              <i
                className="fa-brands fa-facebook"
                style={{
                  color: "#1877F2",
                  fontSize: "30px",
                }}
              ></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/tarteelalquran23?igsh=MTFodW9mZ3B3cGc5cA=="
              target="_blank"
            >
              <i
                className="fab fa-instagram"
                style={{
                  color: "#E1306C",
                  fontSize: "30px",
                }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
