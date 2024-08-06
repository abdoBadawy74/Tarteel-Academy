import React from "react";
import { Link } from "react-router-dom";

export default function Icons() {
  return (
    <div>
      <a
        className="d-flex gap-2 p-2 align-items-center text-decoration-none"
        style={{
          backgroundColor: "#D9D9D9",
          width: "160px",
          textAlign: "center",
          position: "fixed",
          bottom: "60px",
          right: "0",
          margin: "1rem",
          borderRadius: "10px",
          color: "#01934A",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          zIndex: "999",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
        href="https://wa.link/ffwnxf"
        target="_blank"
      >
        WhatsApp <i className="fab fa-whatsapp"></i>
      </a>

      <Link
        className="d-flex gap-2 p-2 align-items-center text-decoration-none"
        style={{
          backgroundColor: "#D9D9D9",
          width: "160px",
          textAlign: "center",
          position: "fixed",
          bottom: "0px",
          right: "0",
          margin: "1rem",
          borderRadius: "10px",
          color: "#01934A",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          zIndex: "999",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
        to="/contact"
      >
        Free Trial <i className="fas fa-graduation-cap"></i>
      </Link>
    </div>
  );
}
