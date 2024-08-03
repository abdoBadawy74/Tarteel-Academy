import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard(props) {
  const { course } = props;
  return (
    <div
      className="card my-2 col-12 col-md-3 d-flex flex-column justify-content-between"
      style={{
        border: "1px solid #000",
      }}
    >
      <img
        src={course.img}
        className="card-img-top"
        alt={course.title}
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h3
          className="card-title text-center fw-bold"
          style={{
            color: "#2F4858",
            fontSize: "30px",
          }}
        >
          {course.title}
        </h3>
        <p
          className="card-text text-center"
          style={{
            color: "0C0E47",
            opacity: "0.7",
            fontWeight: "600",
            fontSize: "18px",
            height: "100px",
          }}
        >
          {course.pub_dec}
        </p>
        <Link to="" className="Course-btn px-5 py-3 text-decoration-none d-block m-auto text-center"
            
            style={{
                backgroundColor: "#008663",
                color: "#fff",
                fontWeight: "700",
                fontSize: "20px",
                borderRadius: "75px",
                width: "fit-content",
            }}
            >
          Course Details
        </Link>
      </div>
    </div>
  );
}
