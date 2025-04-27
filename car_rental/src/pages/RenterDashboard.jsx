// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RenterDashboard = () => {
//     const navigate = useNavigate()
//     const [showBookingOptions,setShowBookingOptions] = useState(false)

//     const handleLogout = () =>{
//       localStorage.removeItem("userId")
//       localStorage.removeItem("userType")
  
//       navigate("/login/admin")
//     }
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar (3 Columns) */}
//         <aside
//           className="col-2 left-sidebar d-flex flex-column justify-content-between"
//           style={{
//             backgroundColor: "white", // Sidebar background color changed to red
//             padding: "20px",
//             height: "100vh",
//             overflowY: "hidden",
//           }}
//         >
//             <div>
//           <div className="brand-logo d-flex align-items-center justify-content-between">
//             <h1
//               style={{
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 color: "deeppink",
//               }}
//             >
//               CAR RENTER
//             </h1>
//           </div>
//           <nav className="sidebar-nav">
//             <ul id="sidebarnav">
             
//             <li className="sidebar-item">
//                 <button
//                   className="sidebar-link mb-3"
//                   onClick={() => navigate("/renter/booking")}
//                 >
//                   BOOKING
//                 </button>
//               </li>
             
              
//             </ul>
//           </nav>
//           </div>
//           <div>
//             <button
//               className="sidebar-link mt-5 btn btn-danger text-white w-100"
//               onClick={handleLogout}
//             >
//               LOG OUT
//             </button>
//           </div>
//         </aside>

//         {/* Main Content (9 Columns) */}
//         <div className="col-10 content-area" style={{ overflow:"hidden"}}>
//            <div
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwcmVudHxlbnwwfHwwfHx8MA%3D%3D" alt="car')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     ></div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RenterDashboard


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const RenterDashboard = () => {
  const navigate = useNavigate();
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    navigate("/login/admin");
  };
  const sidebarButtonStyle = {
    width: "100%",
    backgroundColor: "#FF69B4",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    fontWeight: "500",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside
          className="col-2 d-flex flex-column justify-content-between"
          style={{
            backgroundColor: "#FEF6F8",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd",
          }}
        >
          <div>
            <h4 className="text-center mb-4" style={{ color: "deeppink", fontWeight: "bold" }}>
              CAR RENTER
            </h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <button
                  className="sidebar-link"
                  onClick={() => navigate("/renter/booking")}
                  style={sidebarButtonStyle}
                >
                  BOOKING
                </button>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            LOG OUT
          </button>
        </aside>
        {/* Main Content */}
        <div className="col-10 p-0">
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=1600&q=80&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100vh",
              position: "relative",
            }}
          >
            {/* Optional overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <h1 className="text-white">Welcome to Renter Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RenterDashboard;