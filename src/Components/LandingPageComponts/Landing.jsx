import React from "react";
import { FaChevronRight } from "react-icons/fa";
import logo from "../../assets/logo.png";

export default function Landing() {
  return (
    <div className="container landing my-5">
      <div className="desc">
        <h1>Tarteel Al Quran Academy</h1>
        <p className="mt-3 mb-5">
          Find out how you can learn Quran quickly and effectively
        </p>
        <button className="btn btn-success">
          Get Free Trial <FaChevronRight />
        </button>
      </div>
      <div className="image">
        <img src={logo} alt="Tarteel Quran Academy" />
      </div>
    </div>
  );
}
