import React from "react";
import { Link } from "react-router-dom";

export default function Icons() {
  return (
    <div>
      <a
        className="d-flex gap-2 p-2 align-items-center text-decoration-none"
        style={{
          backgroundColor: "#056736",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          textAlign: "center",
          position: "fixed",
          bottom: "60px",
          right: "0",
          margin: "1rem",
          borderRadius: "50%",
          color: "#01934A",
          zIndex: "999",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
        href="https://wa.link/ffwnxf"
        target="_blank"
      >
        <i className="fab fa-whatsapp text-white"></i>
      </a>

      <a
        className="d-flex gap-2 p-2 align-items-center text-decoration-none"
        style={{
          backgroundColor: "#0866ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          textAlign: "center",
          position: "fixed",
          bottom: "10px",
          right: "0",
          margin: "1rem",
          borderRadius: "50%",
          color: "#FFF",
          zIndex: "999",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
        href="https://www.facebook.com/profile.php?id=61564286336130&mibextid=ZbWKwL"
        target="_blank"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>

      <a
        className="d-flex gap-2 p-2 align-items-center text-decoration-none"
        style={{
          background: "#E1306C",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          textAlign: "center",
          position: "fixed",
          bottom: "107px",
          right: "0",
          margin: "1rem",
          borderRadius: "50%",
          color: "#FFF",
          zIndex: "999",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
        href="https://www.instagram.com/tarteelalquran23?igsh=MTFodW9mZ3B3cGc5cA=="
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
}
