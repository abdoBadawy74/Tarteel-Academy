import React from 'react'
import { useLocation } from 'react-router-dom';

export default function CourseDetials() {
    const location = useLocation();
    console.log(location.state);

  return (
    <div>CourseDetials</div>
  )
}
