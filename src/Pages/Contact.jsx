// import React , {useState} from "react";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

// export default function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "male",
//     category: "quran",
//     country: "",
//     region: "",
//     numberOfStudents: 1,
//     age: 1,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleCountryChange = (val) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       country: val,
//     }));
//   };

//   const handleRegionChange = (val) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       region: val,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("https://formspree.io/f/{your_form_id}", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           alert("Email sent successfully!");
//         } else {
//           alert("Failed to send email.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("Error sending email.");
//       });
//   };

//   return (
//     <div className="conatct container my-5 ">
//       <h2
//         style={{
//           color: "#01934A",
//           fontSize: "50px",
//           fontWeight: "bold",
//         }}
//       >
//         Book Free Trial Appointment
//       </h2>
//       <div className="d-flex gap-2 justify-content-between flex-wrap">
//         <form className="form col-12 col-md-4">
//           <div className="mb-3">
//             <input
//               type="text"
//               name="name"
//               className="w-100 rounded border- p-2 outline-0"
//               placeholder="Name"
//               style={{
//                 border: "1px solid #2F4858",
//                 backgroundColor: "rgba(47, 72, 88, 0.85)",
//                 color: "#fff",
//               }}
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               name="email"
//               className="w-100 rounded border- p-2 outline-0"
//               placeholder="Email"
//               style={{
//                 border: "1px solid #2F4858",
//                 backgroundColor: "rgba(47, 72, 88, 0.85)",
//                 color: "#fff",
//               }}
//             />
//           </div>
//           <div className="mb-3 d-flex gap-1 ">
//             <select
//               name="gender"
//               id="gender"
//               className="col-4 p-2 rounded"
//               style={{
//                 border: "1px solid #2F4858",
//                 backgroundColor: "rgba(47, 72, 88, 0.85)",
//                 color: "#fff",
//               }}
//             >
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//             <select name="category" id="category" className="col-8 p-2 rounded"
//               style={{
//                 border: "1px solid #2F4858",
//                 backgroundColor: "rgba(47, 72, 88, 0.85)",
//                 color: "#fff",
//               }}>
//               <option value="quran">Quran</option>
//               <option value="islamic studies">Islamic Studies</option>
//               <option value="arabic">Arabic</option>
//             </select>
//           </div>
//           <div className="mb-3">
//             <CountryDropdown
//               className="w-100 rounded border- p-2 outline-0"
//               style={{
//                 border: "1px solid #2F4858",
//                 backgroundColor: "rgba(47, 72, 88, 0.85)",
//                 color: "#fff",
//               }}
//             />
//           </div>
//           <div className="mb-3">
//             <RegionDropdown
//               className="w-100 rounded border- p-2 outline-0"
//               style={{
//                 border: "1px solid #2F4858",
//                 backgroundColor: "rgba(47, 72, 88, 0.85)",
//                 color: "#fff",
//               }}
//             />
//           </div>
//           <div className="mb-3 d-flex gap-1">
//             <select name="numbrrOfStudends" id="numbrrOfStudends"
//               className="col-8 p-2 rounded"
//               style={{
//                 border: "1px solid #2F4858",
//                 backgroundColor: "rgba(47, 72, 88, 0.85)",
//                 color: "#fff",
//               }}
//             >
//               {[...Array(100)].map((_, i) => (
//                 <option key={i} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <select name="age" id="age" className="col-4 p-2 rounded"
//               style={{
//                 border: "1px solid #2F4858",
//                 backgroundColor: "rgba(47, 72, 88, 0.85)",
//                 color: "#fff",
//               }}>
//               {[...Array(100)].map((_, i) => (
//                 <option key={i} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="btn w-100 text-white fw-bold"
//             style={{
//               backgroundColor: "#01934A",
//               border: "none",
//               fontSize: "20px",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               display: "block",
//             }}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import logo from "../assets/logo.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    category: "",
    country: "",
    region: "",
    numberOfStudents: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCountryChange = (val) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      country: val,
    }));
  };

  const handleRegionChange = (val) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      region: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/xqazqnqg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Email sent successfully!");
        } else {
          alert("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending email.");
      });
  };

  return (
    <div className="conatct container my-5">
      <h2
        style={{
          color: "#01934A",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Book Free Trial Appointment
      </h2>
      <div className="d-flex gap-2 justify-content-between align-items-center flex-wrap flex-column-reverse flex-md-row">
        <form className="form col-12 col-md-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="w-100 rounded border- p-2 outline-0"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="w-100 rounded border- p-2 outline-0"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
            />
          </div>
          <div className="mb-3 d-flex gap-1">
            <select
              name="gender"
              className="col-4 p-2 rounded"
              value={formData.gender}
              onChange={handleChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
            >
              <option value="" disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select
              name="category"
              className="col-8 p-2 rounded"
              value={formData.category}
              onChange={handleChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
            >
              <option value="" disabled selected>
                Category
              </option>
              <option value="quran">Quran</option>
              <option value="islamic studies">Islamic Studies</option>
              <option value="arabic">Arabic</option>
            </select>
          </div>
          <div className="mb-3">
            <CountryDropdown
              className="w-100 rounded border- p-2 outline-0"
              value={formData.country}
              onChange={handleCountryChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
            />
          </div>
          <div className="mb-3">
            <RegionDropdown
              value={formData.region}
              onChange={handleRegionChange}
              className="w-100 rounded border- p-2 outline-0"
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
              country={formData.country}
            />
          </div>
          <div className="mb-3 d-flex gap-1">
            <select
              name="numberOfStudents"
              className="col-8 p-2 rounded"
              value={formData.numberOfStudents}
              onChange={handleChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
            >
              <option value="" disabled>
                Number of Students
              </option>
              {[...Array(100)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name="age"
              className="col-4 p-2 rounded"
              value={formData.age}
              onChange={handleChange}
              style={{
                border: "1px solid #2F4858",
                backgroundColor: "rgba(47, 72, 88, 0.85)",
                color: "#fff",
              }}
            >
              <option value="" disabled>
                Age
              </option>
              {[...Array(100)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn w-100 text-white fw-bold"
            style={{
              backgroundColor: "#01934A",
              border: "none",
              fontSize: "20px",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </form>
        <img src={logo} alt="logo" className="col-12 col-md-4" />
      </div>
    </div>
  );
}
