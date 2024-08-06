import React from "react";

export default function Teachers() {
  return (
    <div className="teachers container my-4" id="teachers">
      <h2
        className="course-title fw-bold position-relative"
        style={{
          color: "#2F4858",
          fontSize: "50px",
        }}
      >
        Our Teachers
      </h2>
      <p
        style={{
          fontSize: "30px",
          fontWeight: "500",
          color: "rgba(12, 14, 71, 0.7)",
        }}
      >
        At{" "}
        <span
          style={{
            color: "#01934A",
            fontWeight: "700",
            opacity: 1,
          }}
        >
          Tarteel AlQuran Academy
        </span>{" "}
        , we are proud to have a team of dedicated, knowledgeable, and
        experienced Quran teachers who are passionate about guiding our students
        on their spiritual journey. <br />
        Each of our teachers brings a wealth of expertise in Quranic studies,
        Tajweed, and Islamic education, ensuring that our students receive the
        highest quality of learning.Our educators are not only skilled in their
        knowledge but also committed to nurturing a love for the Quran and
        Islamic values in every student.
      </p>
      <p style={{
        fontSize: "30px",
        fontWeight: "700",
        color: "rgba(12, 14, 71, 0.7)",
      }}>
        <span style={{
            color: "#01934A",
            fontWeight: "800",
            fontSize: "37px",
            opacity: 1,
            textTransform: "uppercase",
        }}>Join us</span> and learn from the best as you deepen your
        understanding and connection with the Quran
      </p>
    </div>
  );
}
