import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import questionMark from "../../assets/questionMark.jpg";

function WhyChoosing() {
  return (
    <div className="container why-choosing d-flex justify-content-between align-items-center">
      <div className="info">
        <h2 className="heading">Why Choose Us</h2>
        <p className="desc">
          In order to give our student the finest learning experience and
          outcomes, we give them the freedom to enjoy individual Learning
        </p>
        <ul>
          <li>
            <FaCheckCircle
              style={{ color: "#01934A", fontSize: "20px", marginRight: "7px" }}
            />{" "}
            2 free Classes
          </li>
          <li>
            <FaCheckCircle
              style={{ color: "#01934A", fontSize: "20px", marginRight: "7px" }}
            />
            Course Materials
          </li>
          <li>
            <FaCheckCircle
              style={{ color: "#01934A", fontSize: "20px", marginRight: "7px" }}
            />
            Completion Certificate
          </li>
          <li>
            <FaCheckCircle
              style={{ color: "#01934A", fontSize: "20px", marginRight: "7px" }}
            />
            Special offers for families and friends
          </li>
          <li>
            <FaCheckCircle
              style={{ color: "#01934A", fontSize: "20px", marginRight: "7px" }}
            />
            Both female and male tutors
          </li>
          <li>
            <FaCheckCircle
              style={{ color: "#01934A", fontSize: "20px", marginRight: "7px" }}
            />
            Ijazah certified teachers
          </li>
        </ul>
      </div>
      <img src={questionMark} alt="Tarteel" />
    </div>
  );
}

export default WhyChoosing;
