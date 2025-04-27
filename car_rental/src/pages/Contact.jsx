import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  const [showDropdown,setShowDropdown] = useState(false)
  return (
    
    <div>
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
        <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="contact_taital">Get In Touch</h1>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="contact_section_2">
               <div className="row">
                  <div className="col-md-12">
                     <div className="mail_section_1">
                        <input type="text" className="mail_text" placeholder="Name" name="Name"/>
                        <input type="text" className="mail_text" placeholder="Email" name="Email"/>
                        <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/>
                        <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        <div className="send_bt">
                            <button>Send</button>
                            </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
       {/* contact section end  */}
       {/* footer section start  */}
       <div className="footer_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="footeer_logo">
          <img src="assets/images/logo.png" alt="Logo" />
        </div>
      </div>
    </div>
    <div className="footer_section_2">
      <div className="row">
        <div className="col">
          <h4 className="footer_taital">Subscribe Now</h4>
          <p className="footer_text">There are many variations of passages of Lorem Ipsum available,</p>
          <div className="form-group">
            <textarea className="update_mail" placeholder="Enter Your Email" rows="5" id="comment"></textarea>
            <div className="subscribe_bt">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col">
          <h4 className="footer_taital">Information</h4>
          <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority </p>
        </div>
        <div className="col">
          <h4 className="footer_taital">Helpful Links</h4>
          <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority </p>
        </div>
        <div className="col">
          <h4 className="footer_taital">Investments</h4>
          <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority </p>
        </div>
        <div className="col">
          <h4 className="footer_taital">Contact Us</h4>
          <div className="location_text">
            <a href="#"><i className="fa fa-map-marker"></i> <span className="padding_left_15">Location</span></a>
          </div>
          <div className="location_text">
            <a href="#"><i className="fa fa-phone"></i> <span className="padding_left_15">(+71) 8522369417</span></a>
          </div>
          <div className="location_text">
            <a href="#"><i className="fa fa-envelope"></i> <span className="padding_left_15">demo@gmail.com</span></a>
          </div>
          <div className="social_icon">
            <ul className="social_links">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

       {/* footer section end  */}
       {/* copyright section start  */}
      <div className="copyright_section">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <p className="copyright_text">2023 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a></p>
               </div>
            </div>
         </div>
      </div>
      <button onClick={()=> navigate("/")}>Go To Home Page</button>
    </div>
  )
}

export default Contact