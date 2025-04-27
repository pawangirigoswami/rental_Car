import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
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
      
    </div>
  )
}

export default Service