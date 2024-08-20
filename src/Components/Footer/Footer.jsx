import icon2 from "../../assets/youtube-icon.svg";
import icon3 from "../../assets/instgram-icon.svg";
import icon4 from "../../assets/facebook-icon.svg";
import icon5 from "../../assets/telegram-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";

import "./Footer.css";

export default function Footer() {
  const location = useLocation();
  // Scroll to section if location changes to "/about"
  useEffect(() => {
    if (location.hash === "#about") {
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        scroll.scrollTo(aboutElement.offsetTop, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    }
    if (location.hash === "#teachers") {
      const aboutElement = document.getElementById("teachers");
      if (aboutElement) {
        scroll.scrollTo(aboutElement.offsetTop, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    }
    console.log(location);
  }, [location]);
  return (
    <div
      style={{
        marginTop: "50px",
        backgroundColor: "#2F4858",
        padding: "50px 50px 10px 50px",
      }}
      className="position-relative overflow-hidden footer"
    >
      <div
        className="container mx-auto p-5 text-white text-capitalize d-flex justify-content-between flex-wrap position-relative"
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          zIndex: 1,
        }}
      >
        <div className="text col-12 col-lg-4">
          <p className="fs-3 text-capitalize">need to know !!!</p>
          <h3
            style={{
              fontSize: "48px",
            }}
          >
            need to know !!!
          </h3>
        </div>
        <div className="d-flex flex-column gap-3  justify-self-end col-12 col-lg-3 ">
          <input
            type="email"
            placeholder="Email address..."
            className="text-muted p-2 rounded border-0 outline-0 w-100"
          />
          <button
            className="btn p-2 w-100"
            style={{
              backgroundColor: "#1D1D35",
              color: "#FFF",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2
          className="fs-2 bebas-neue-bold"
          style={{
            color: "#FFF",
            textTransform: "uppercase",
            marginTop: "50px",
          }}
        >
          Tarteel{" "}
          <span
            style={{
              color: "#d9d9d9",
            }}
          >
            Al Qu
            <span
              style={{
                color: "#FFF",
              }}
            >
              r
            </span>
            an
          </span>
        </h2>
        <div className="d-flex justify-content-between flex-wrap border-bottom py-2">
          <ul
            className="d-flex gap-4 text-white "
            style={{
              fontWeight: "500",
            }}
          >
            <li>
              <Link className="text-white text-decoration-none" to={"/courses"}>
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-decoration-none"
                to={"/#teachers"}
              >
                Teachers
              </Link>
            </li>
            <li>
              <Link className="text-white text-decoration-none" to={"/#about"}>
                About Us
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2 social">
            <a href="https://wa.link/ffwnxf" target="_blank">
              <img
                src={icon2}
                alt="icon"
                style={{
                  cursor: "pointer",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/tarteelalquran23?igsh=MTFodW9mZ3B3cGc5cA=="
              target="_blank"
            >
              <img
                src={icon3}
                alt="icon"
                style={{
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61564286336130&mibextid=ZbWKwL" target="_blank">
              <img
                src={icon4}
                alt="icon"
                style={{
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap mt-2 align-items-center">
          <span className="text-white copy">
            Copyright ® 2024 TarteelAlQuran All rights Perceived
          </span>
          <div
            className="d-flex gap-3 text-white m-0"
            style={{
              opacity: 0.5,
            }}
          >
            <span>Privacy Policy</span>

            <span>Terms </span>
          </div>
        </div>
      </div>
    </div>
  );
}
