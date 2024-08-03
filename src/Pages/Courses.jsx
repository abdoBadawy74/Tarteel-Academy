import React from "react";
import { courses } from "../data/Courses";
import CourseCard from "../Components/CourseCard/CourseCard";
import { Outlet } from "react-router-dom";

export default function Courses() {
  return (
    <div className="container my-2 d-flex flex-wrap gap-3 justify-content-center">
      {courses.map((course) => {
        return <CourseCard key={course.id} course={course}  />;
      })}
    </div>
  );
}
