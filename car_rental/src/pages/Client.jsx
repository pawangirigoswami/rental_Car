import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Client = () => {
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
      
    </div>
  )
}

export default Client