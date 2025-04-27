import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
                                 <li><Link className="dropdown-item" to="/login/admin">Login</Link></li>
                                                                  <li><Link className="dropdown-item" to="/register/renter">Signup</Link></li>
                                                                 
                              </ul>
                           )}
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>

         {/* Contact Section */}
         <div className="call_text_main">
            <div className="container">
               <div className="call_taital">
                  <div className="call_text"><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left_15">Location</span></a></div>
                  <div className="call_text"><a href="#"><i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_15">(+91) 7497060299 </span></a></div>
                  <div className="call_text"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_15">pawangoswami9424@gmail.com</span></a></div>
               </div>
            </div>
         </div>

      {/* //banner section end  */}
      
      {/* //about section start  */}
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
       {/* //about section end  */}
      <div className="search_section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="search_taital">Search Your Best Cars</h1>
                  <p className="search_text">Using 'Content here, content here', making it look like readable</p>
                   {/* select box section start  */}

                  <div className="container">
                     <div className="select_box_section">
                        <div className="select_box_main">
                           <div className="row">
                              <div className="col-md-3 select-outline">
                                 <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                                    <option value="" disabled selected>Any Brand</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                 </select>
                              </div>
                              <div className="col-md-3 select-outline">
                                 <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                                    <option value="" disabled selected>Any type</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                 </select>
                              </div>
                              <div className="col-md-3 select-outline">
                                 <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                                    <option value="" disabled selected>Price</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                 </select>
                              </div>
                              <div className="col-md-3">
                              <button className="btn btn-primary">Search Now</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                   {/* select box section end  */}
               </div>
            </div>
         </div>
      </div>
      {/* // gallery section start  */}
            <div className="gallery_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="gallery_taital">Our best offers</h1>
               </div>
            </div>
            <div className="gallery_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="gallery_box">
                        <div className="gallery_img"><img src="assets/images/img-1.png"/></div>
                        <h3 className="types_text">Toyota car</h3>
                          <p className="looking_text">Start per day $4500</p>
                        <div className="read_bt">
                            <button>Book Now</button>
                            </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="gallery_box">
                        <div className="gallery_img"><img src="assets/images/img-2.png"/></div>
                        <h3 className="types_text">Toyota car</h3>
                          <p className="looking_text">Start per day $4500</p>
                        <div className="read_bt"><button>Book Now</button></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="gallery_box">
                        <div className="gallery_img"><img src="assets/images/img-3.png"/></div>
                        <h3 className="types_text">Toyota car</h3>
                          <p className="looking_text">Start per day $4500</p>
                        <div className="read_bt"><button>Book Now</button></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="gallery_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="gallery_box">
                        <div className="gallery_img"><img src="assets/images/img-1.png"/></div>
                        <h3 className="types_text">Toyota car</h3>
                          <p className="looking_text">Start per day $4500</p>
                        <div className="read_bt"><button>Book Now</button></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="gallery_box">
                        <div className="gallery_img"><img src="assets/images/img-2.png"/></div>
                        <h3 className="types_text">Toyota car</h3>
                          <p className="looking_text">Start per day $4500</p>
                        <div className="read_bt"><button>Book Now</button></div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="gallery_box">
                        <div className="gallery_img"><img src="assets/images/img-3.png"/></div>
                        <h3 className="types_text">Toyota car</h3>
                          <p className="looking_text">Start per day $4500</p>
                        <div className="read_bt"><button>Book Now</button></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* // gallery section end  */}
      {/* // choose section start  */}
      <div className="choose_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="choose_taital">WHY CHOOSE US</h1>
               </div>
            </div>
            <div className="choose_section_2">
               <div className="row">
                  <div className="col-sm-4">
                     <div className="icon_1"><img src="assets/images/icon-1.png"/></div>
                     <h4 className="safety_text">SAFETY & SECURITY</h4>
                     <p className="ipsum_text">variations of passages of Lorem Ipsum available, but the majority have </p>
                  </div>
                  <div className="col-sm-4">
                     <div className="icon_1"><img src="assets/images/icon-2.png"/></div>
                     <h4 className="safety_text">Online Booking</h4>
                     <p className="ipsum_text">variations of passages of Lorem Ipsum available, but the majority have </p>
                  </div>
                  <div className="col-sm-4">
                     <div className="icon_1"><img src="assets/images/icon-3.png"/></div>
                     <h4 className="safety_text">Best Drivers</h4>
                     <p className="ipsum_text">variations of passages of Lorem Ipsum available, but the majority have </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
       {/* choose section end */}
       {/* client section start  */}
      <div className="client_section layout_padding">
         <div className="container">
            <div id="custom_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="row">
                        <div className="col-md-12">
                           <h1 className="client_taital">What Says Customers</h1>
                        </div>
                     </div>
                     <div className="client_section_2">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="client_taital_box">
                                 <div className="client_img"><img src="assets/images/client-img1.png"/></div>
                                 <h3 className="moark_text">Hannery</h3>
                                 <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page</p>
                              </div>
                              <div className="quick_icon"><img src="assets/images/quick-icon.png"/></div>
                           </div>
                           <div className="col-md-6">
                              <div className="client_taital_box">
                                 <div className="client_img"><img src="assets/images/client-img2.png"/></div>
                                 <h3 className="moark_text">Channery</h3>
                                 <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page</p>
                              </div>
                              <div className="quick_icon"><img src="assets/images/quick-icon.png"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-md-12">
                           <h1 className="client_taital">What Says Customers</h1>
                        </div>
                     </div>
                     <div className="client_section_2">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="client_taital_box">
                                 <div className="client_img"><img src="assets/images/client-img1.png"/></div>
                                 <h3 className="moark_text">Hannery</h3>
                                 <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page</p>
                              </div>
                              <div className="quick_icon"><img src="assets/images/quick-icon.png"/></div>
                           </div>
                           <div className="col-md-6">
                              <div className="client_taital_box">
                                 <div className="client_img"><img src="assets/images/client-img2.png"/></div>
                                 <h3 className="moark_text">Channery</h3>
                                 <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page</p>
                              </div>
                              <div className="quick_icon"><img src="assets/images/quick-icon.png"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-md-12">
                           <h1 className="client_taital">What Says Customers</h1>
                        </div>
                     </div>
                     <div className="client_section_2">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="client_taital_box">
                                 <div className="client_img"><img src="assets/images/client-img1.png"/></div>
                                 <h3 className="moark_text">Hannery</h3>
                                 <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page</p>
                              </div>
                              <div className="quick_icon"><img src="assets/images/quick-icon.png"/></div>
                           </div>
                           <div className="col-md-6">
                              <div className="client_taital_box">
                                 <div className="client_img"><img src="assets/images/client-img2.png"/></div>
                                 <h3 className="moark_text">Channery</h3>
                                 <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page</p>
                              </div>
                              <div className="quick_icon"><img src="assets/images/quick-icon.png"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#custom_slider" role="button" data-slide="prev">
               <i className="fa fa-angle-left"></i>
               </a>
               <a className="carousel-control-next" href="#custom_slider" role="button" data-slide="next">
               <i className="fa fa-angle-right"></i>
               </a>
            </div>
         </div>
      </div>
      {/* // client section end  */}
      {/* // contact section start  */}
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
     
     

    </>
  )
}

export default Home