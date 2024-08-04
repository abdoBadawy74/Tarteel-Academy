import React from 'react'
import Landing from '../Components/LandingPageComponts/Landing'
import AboutCourses from '../Components/LandingPageComponts/AboutCourses'
import About from '../Components/LandingPageComponts/About'
import WhyChooseUS from '../Components/LandingPageComponts/WhyChooseUS'

export default function LandingPage() {
  return (
    <div>
      <Landing/>
      <AboutCourses/>
      <About/>
      <WhyChooseUS/>
    </div>
  )
}
