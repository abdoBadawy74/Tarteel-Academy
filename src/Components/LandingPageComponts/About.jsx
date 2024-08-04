import React from "react";
import img from "../../assets/quran.jpg";

function About() {
  return (
    <div id="about">
      <h2 className="main-title my-2 mt-4">About Us</h2>
      <div className="container about">
        <div className="image">
          <img src={img} alt="Tarteel" />
        </div>
        <div className="desc">
          <p className="ar-desc">
             إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ
          </p>
          <p className="en-desc">
            Indeed , We have sent it down as an Arabic Qur’an that you might
            understand
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
