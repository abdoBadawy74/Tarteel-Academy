import  { useEffect } from "react";
import Landing from "../Components/LandingPageComponts/Landing";
import AboutCourses from "../Components/LandingPageComponts/AboutCourses";
import About from "../Components/LandingPageComponts/About";
import WhyChooseUS from "../Components/LandingPageComponts/WhyChooseUS";
import FeaturedCourses from "../Components/LandingPageComponts/FeaturedCourses";
import Teachers from "../Components/LandingPageComponts/Teachers";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Landing />
      <AboutCourses />
      <About />
      <WhyChooseUS />
      <FeaturedCourses />
      <Teachers />
    </div>
  );
}
