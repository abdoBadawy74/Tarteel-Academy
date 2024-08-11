import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Courses from "./Pages/Courses";

import CourseDetials from "./Pages/CourseDetials";
import Icons from "./Components/Icons/Icons";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="courses" element={<Courses />}/>
        <Route path="courses/:courseId" element={<CourseDetials />} />
        
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Icons/>
      <Footer />
    </>
  );
}

export default App;
