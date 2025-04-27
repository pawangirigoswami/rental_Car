import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
   const [showDropdown, setShowDropdown] = useState(false);

   return (
      <>
         {/* Header Section */}
         <div className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                  <a className="navbar-brand" href="index.html">
                     <img src="assets/images/logo.png" alt="logo" />
                  </a>
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-toggle="collapse"
                     data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                           <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/vehicles">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/client">Client</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                        {/* ✅ Dropdown Fix */}
                        <li className="nav-item dropdown" style={{ position: "relative" }}>
                           <button 
                              className="nav-link btn btn-light" 
                              onClick={() => setShowDropdown(!showDropdown)}
                           >
                              Login
                           </button>

                           {showDropdown && (
                              <ul 
                                 className="dropdown-menu show" // ✅ Bootstrap requires 'show' class
                                 style={{
                                    position: "absolute",
                                    top: "40px",
                                    left: "0",
                                    background: "white",
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    listStyle: "none",
                                    width: "150px",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                    display: "block", // ✅ Override Bootstrap's default 'display: none'
                                 }}
                              >
                                <li><Link className="dropdown-item" to="/login/admin">Admin</Link></li>
                                                                 <li><Link className="dropdown-item" to="/register/renter">Renter</Link></li>
                                                                 <li><Link className="dropdown-item" to="/register/hirer">Hirer</Link></li>
                              </ul>
                           )}
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
         


        <div className="about_section layout_padding">
      <div className="container">
        <div className="about_section_2">
          <div className="row">
            <div className="col-md-6">
              <div className="image_iman">
                <img src="assets/images/about-img.png" className="about_img" alt="About Us" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_taital_box">
                <h1 className="about_taital">
                  About <span style={{ color: "#fe5b29" }}>Us</span>
                </h1>
                <p className="about_text">
                  Going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of the text. All the Lorem Ipsum generators on
                  the Internet tend to repeat predefined passages.
                </p>
                <div className="readmore_btn">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About