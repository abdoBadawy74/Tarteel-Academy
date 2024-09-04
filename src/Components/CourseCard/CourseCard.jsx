import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
      <div className="card-body d-flex flex-column">
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
          className="card-text text-center flex-grow-1"
          style={{
            color: "#0C0E47",
            opacity: "0.7",
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          {course.pub_dec}
        </p>
        <div className="mt-auto d-flex justify-content-center">
          <Link
            to={`/courses/${course.id}`}
            state={course}
            className="Course-btn px-5 py-3 text-decoration-none text-center"
            style={{
              backgroundColor: "#008663",
              color: "#fff",
              fontWeight: "700",
              fontSize: "20px",
              borderRadius: "75px",
            }}
          >
            Course Details
          </Link>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pub_dec: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};
