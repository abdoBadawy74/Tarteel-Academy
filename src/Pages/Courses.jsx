import { useEffect } from "react";
import { courses } from "../data/Courses";
import CourseCard from "../Components/CourseCard/CourseCard";

export default function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h2 className="main-title my-5">Courses</h2>
      <div className="container my-2 d-flex flex-wrap gap-3 justify-content-center">
        {courses.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </>
  );
}
