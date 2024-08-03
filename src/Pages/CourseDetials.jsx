import React, { useEffect } from "react";
import { courses } from "../data/Courses";
import { useParams } from "react-router-dom";

export default function CourseDetials() {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));
  console.log(course);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container my-4">
      <h2
        className="course-title fw-bold position-relative"
        style={{
          color: "#2F4858",
          fontSize: "50px",
        }}
      >
        {course.title}
      </h2>
      <div className="d-flex my-4 gap-3  align-items-center flex-wrap justify-content-between">
        <p
          style={{
            fontSize: "30px",
            fontWeight: "500",
            color: "#2F4858",
            opacity: 0.7,
          }}
          className="col-12 col-md-7"
        >
          {course.sec_dec1}
        </p>
        <img
          src={course.sec_img1}
          alt="course-img1"
          className="col-12 col-md-4"
          style={{
            height: "300px",
            borderRadius: "15px",
            boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
          }}
        />
      </div>
      <div className="d-flex my-4 gap-3 align-items-center flex-wrap justify-content-between flex-column-reverse flex-md-row">
        {course.sec_img2 && (
          <img
            src={course.sec_img2}
            alt="course-img1"
            className="col-12 col-md-4"
            style={{
              height: "300px",
              borderRadius: "15px",
              boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
            }}
          />
        )}
        <div className="col-12 col-md-7">
          {course.ayah_ar && (
            <div>
              <p
                style={{
                  fontSize: "35px",
                  fontWeight: "700",
                  color: "#2F4858",
                  opacity: 0.5,
                }}
                className=" text-center"
              >
                {course.ayah_ar}
              </p>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#2F4858",
                  opacity: 0.5,
                }}
                className=" text-center"
              >
                {course.ayah_en}
              </p>
            </div>
          )}
          <p
            style={{
              fontSize: "30px",
              fontWeight: "500",
              color: "#2F4858",
              opacity: 0.7,
            }}
          >
            {course.sec_dec2}
          </p>
        </div>
      </div>
      <div className="sub-courses">
        {course.sub_courses?.map((sub_course, i) => {
          return (
            <div key={i}>
              <h3
                className="fw-bold position-relative"
                style={{
                  color: "#01934A",
                  fontSize: "30px",
                }}
              >
                - {sub_course.title} :{" "}
              </h3>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#2F4858",
                  opacity: 0.7,
                }}
              >
                {sub_course.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
