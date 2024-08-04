import React from "react";
import { FaChevronRight } from "react-icons/fa";
import about from "../../assets/about.jpg";

export default function AboutCourses() {
  return (
    <>
      <div className="container courses my-2">
        <h2 className="main-title my-2 mt-4">Courses</h2>
        <div className="courses-desc-container d-flex justify-content-between align-items-center">
          <div className="desc">
            <p className="my-3">
              We Provide Qur'an , Islamic and Arabic language Classes ranging
              from beginner to hero for both Children and adults
            </p>
            <button className="btn btn-success fs-2">
              Get Free Trial <FaChevronRight />
            </button>
          </div>
          <div className="image">
            <img src={about} alt="Tarteel Courses" />
          </div>
        </div>
      </div>
    </>
  );
}
