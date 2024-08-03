import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import CourseDetials from "./Pages/CourseDetials";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="courses" element={<Courses />}/>
        <Route path="courses/:courseId" element={<CourseDetials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
