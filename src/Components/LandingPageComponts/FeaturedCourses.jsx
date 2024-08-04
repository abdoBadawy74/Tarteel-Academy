import React from "react";
import { courses } from "../../data/Courses";
import CourseCard from "../CourseCard/CourseCard";
import { Link } from "react-router-dom";

export default function FeaturedCourses() {
  return (
    <>
      <div className="container my-2 d-flex flex-wrap gap-3 justify-content-center">
        {courses.slice(0, 6).map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
      <Link
        to="/courses"
        className="btn text-white fw-bold py-3 px-4"
        style={{
          display: "block",
          width: "fit-content",
          margin: "auto",
          marginTop: "20px",
          fontSize: "25px",
          backgroundColor: "#01934A",
        }}
      >
        View All Courses
      </Link>
    </>
  );
}
