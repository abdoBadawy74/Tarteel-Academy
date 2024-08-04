// import { Link, useLocation , useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import "./Header.css";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// export default function Header() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const updateActiveLink = () => {
//       const hash = window.location.hash.substring(1);
//       // console.log(hash);

//       const activeLink = document.querySelector(".nav-link.active");
//       if (activeLink) {
//         activeLink.classList.remove("active");
//       }

//       if (hash === "/courses") {
//         document.querySelector('a[href="#/courses"]').classList.add("active");
//       } else if (hash === "/home" || hash === "/") {
//         document.querySelector('a[href="#/home"]').classList.add("active");
//       } else if (hash === "about") {
//         document.querySelector('a[href="#/about"]').classList.add("active");
//       } else if (hash === "contact") {
//         document.querySelector('a[href="#/contact"]').classList.add("active");
//       }
//     };

//     updateActiveLink();
//     window.addEventListener("hashchange", updateActiveLink);

//     return () => {
//       window.removeEventListener("hashchange", updateActiveLink);
//     };
//   }, [window.location.hash]);

//   useEffect(() => {
//     if (location.pathname === "/about") {
//       scroll.scrollTo(document.getElementById("about").offsetTop, {
//         duration: 500,
//         delay: 0,
//         smooth: "easeInOutQuart",
//       });

//     }
//     console.log(location);
//   }, [location]);

//   const handleScrollToAbout = (e) => {
//     e.preventDefault();
//     navigate("/#about");
//   };

//   return (
//     <nav
//       className="navbar navbar-expand-lg p-0  m-0 position-relative"
//       style={{
//         zIndex: 22,
//       }}
//     >
//       <div className="container-fluid flex-nowrap px-4 align-items-center">
//         <Link className="navbar-brand" to="/">
//           <span
//             className="fs-2 bebas-neue-bold"
//             style={{
//               color: "#01934A",
//               textTransform: "uppercase",
//             }}
//           >
//             Trateel
//             <span
//               className="grey"
//               style={{
//                 color: "#0C0E47",
//               }}
//             >
//               Al
//               <span
//                 style={{
//                   color: "#01934A",
//                 }}
//               >
//                 Q
//               </span>
//               uran
//             </span>
//           </span>
//         </Link>

//         <button
//           className="navbar-toggler "
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           style={{ borderColor: "#EEE" }}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul
//             className="navbar-nav mx-auto m-2 mb-lg-0"
//             style={{
//               flex: 1,
//               columnGap: "30px",
//               justifyContent: "center",
//             }}
//           >
//             <li className="nav-item">
//               <Link className="nav-link" to="/home">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/courses">
//                 Courses
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link"
//                 to="/about"
//                 onClick={handleScrollToAbout}
//               >
//                 About
//               </Link>
//             </li>
//           </ul>

//           <ul className="navbar-nav m-2 mb-lg-0">
//             <li className="m-auto">
//               <Link className="btn m-2 order-lg-last nav-btn" to="/contact">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Header.css";
import { animateScroll as scroll } from "react-scroll";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Update active link based on URL hash
  useEffect(() => {
    const updateActiveLink = () => {
      const hash = window.location.hash.substring(1);
      const activeLink = document.querySelector(".nav-link.active");
      if (activeLink) {
        activeLink.classList.remove("active");
      }

      const newActiveLink = document.querySelector(`a[href="#${hash}"]`);
      if (newActiveLink) {
        newActiveLink.classList.add("active");
      }
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);

    return () => {
      window.removeEventListener("hashchange", updateActiveLink);
    };
  }, [window.location.hash]);

  // Scroll to section if location changes to "/about"
  useEffect(() => {
    if (location.hash === "#about") {
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        scroll.scrollTo(aboutElement.offsetTop, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    }
    console.log(location);
  }, [location]);

  // Handle scroll to "about" section
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    navigate("/#about");
  };

  return (
    <nav
      className="navbar navbar-expand-lg p-0  m-0 position-relative"
      style={{ zIndex: 22 }}
    >
      <div className="container-fluid flex-nowrap px-4 align-items-center">
        <Link className="navbar-brand" to="/">
          <span
            className="fs-2 bebas-neue-bold"
            style={{ color: "#01934A", textTransform: "uppercase" }}
          >
            Trateel
            <span className="grey" style={{ color: "#0C0E47" }}>
              Al
              <span style={{ color: "#01934A" }}>Q</span>
              uran
            </span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "#EEE" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mx-auto m-2 mb-lg-0"
            style={{
              flex: 1,
              columnGap: "30px",
              justifyContent: "center",
            }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={handleScrollToAbout}
              >
                About
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav m-2 mb-lg-0">
            <li className="m-auto">
              <Link className="btn m-2 order-lg-last nav-btn" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
