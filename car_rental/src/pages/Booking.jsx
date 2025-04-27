// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const BookingList = () => {
//   const [bookings, setBookings] = useState([]);
//   const [showBookings, setShowBookings] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate()

//   const handleFetchBookings = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const response = await axios.post("http://localhost:3001/api/getallbooking");
//       if (response.data.success) {
//         setBookings(response.data.data);
//         setShowBookings(true);
//       } else {
//         setError("Failed to fetch bookings");
//       }
//     } catch (err) {
//       setError("Error fetching booking data");
//     } finally {
//       setLoading(false);
//     }
//   };


//   const handleLogout = () =>{
//     localStorage.removeItem("userId")
//     localStorage.removeItem("userType")

//     navigate("/login/admin")
//   }
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar (3 Columns) */}
//         <aside
//           className="col-2 left-sidebar d-flex flex-column justify-content-between"
//           style={{
//             backgroundColor: "#F6F5F5", // Sidebar background color changed to red
//             padding: "20px",
//             height: "100vh",
//             overflowY: "hidden",
//           }}
//         >
//           <div>
//             <div className="brand-logo d-flex align-items-center justify-content-between">
//               <h1
//                 style={{
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   color: "#DBA2A2", // Changed text color to white for better contrast
//                 }}
//               >
//                 CAR RENTAL AND BUYING
//               </h1>
//             </div>
//             <nav className="sidebar-nav">
              
//             <ul id="sidebarnav">
//   <li className="sidebar-item" style={{
//   backgroundColor:"red",
//   width:"150px"
//   }}>
//     <button className="sidebar-link" onClick={() => navigate("/admin/crudcar")} style={{
//         width: "100%", 
//         backgroundColor: "#CCBBBB",
//         color: "white", 
//         border: "none",
//         padding: "10px",
//         textAlign: "center",
//       }}>
//       CRUD CAR
//     </button>
//   </li>
//   <br/>
//   <li className="sidebar-item"style={{
//   backgroundColor:"red",
//   width:"150px"
//   }}>
//     <button className="sidebar-link" onClick={() => navigate("/admin/renter")} style={{
//         width: "100%", 
//         backgroundColor: "#CCBBBB",
//         color: "white", 
//         border: "none",
//         padding: "10px",
//         textAlign: "center",
//       }}>
//       LIST RENTER
//     </button>
//   </li>
//   <br/>
//   <li className="sidebar-item"style={{
//   backgroundColor:"red",
//   width:"150px"
//   }}>
//     <button className="sidebar-link" onClick={() => navigate("/admin/hirer")} style={{
//         width: "100%", 
//         backgroundColor: "#CCBBBB",
//         color: "white", 
//         border: "none",
//         padding: "10px",
//         textAlign: "center",
//       }}>
//       LIST HIRER
//     </button>
//   </li>
//   <br/>
//   <li className="sidebar-item"style={{
//   backgroundColor:"red",
//   width:"150px"
//   }}>
//     <button className="sidebar-link" onClick={() => navigate("/admin/carlist")} style={{
//         width: "100%", 
//         backgroundColor: "#CCBBBB",
//         color: "white", 
//         border: "none",
//         padding: "10px",
//         textAlign: "center",
//       }}>
//       CAR LIST
//     </button>
//   </li>
//   <br/>
//   <li className="sidebar-item"style={{
//   width:"150px"
//   }}>
//     <button className="sidebar-link mb-3" onClick={() => navigate("/admin/booking")}
//       style={{
//         width: "100%", 
//         backgroundColor: "#CCBBBB",
//         color: "white", 
//         border: "none",
//         padding: "10px",
//         textAlign: "center",
//       }}
//       >
//       BOOKING
//     </button>
//   </li>
  
//   <li className="sidebar-item"style={{
//   backgroundColor:"red",
//   width:"150px"
//   }}>
//     <button className="sidebar-link" onClick={() => navigate("/brand")} style={{
//         width: "100%", 
//         backgroundColor: "#CCBBBB",
//         color: "white", 
//         border: "none",
//         padding: "10px",
//         textAlign: "center",
//       }}>
//       BRANDMANAGER
//     </button>
//   </li>
// </ul>
// </nav>
// </div>

//           {/* Logout Button at the Bottom */}
//           <div>
//             <button
//               className="sidebar-link btn btn-danger text-white w-100"
//               onClick={handleLogout}
              
//             >
//               LOG OUT
//             </button>
//           </div>
//         </aside>

//         {/* Main Content (9 Columns) */}
//         <div className="col-10 content-area" style={{ overflow: "hidden" }}>

//     <div className="container mt-5">
//       <h2>Car Bookings</h2>
//       <button className="btn btn-primary mb-4" onClick={handleFetchBookings}>
//         View All Bookings
//       </button>

//       {loading && <div>Loading bookings...</div>}
//       {error && <div className="alert alert-danger">{error}</div>}

//       {showBookings && (
//         <div className="row">
//           {bookings.length === 0 ? (
//             <div className="col-12 text-center text-muted">No bookings found.</div>
//           ) : (
//             bookings.map((booking) => (
//               <div key={booking._id} className="col-md-4 mb-3">
//                 <div className="card h-100 border-info shadow-sm">

//                   <div className="card-body">
//                     <h5 className="card-title">{booking.carId?.name}</h5>
//                     <p className="card-text">
//                       <strong>Brand:</strong> {booking.brandId?.name}<br />
//                       <strong>Description:</strong> {booking.brandId?.description}<br />
//                       <strong>Booked by:</strong> {booking.hirerId?.name} ({booking.hirerId?.email})<br />
//                       <strong>Payment Mode:</strong> {booking.paymentMode}<br />
//                       <strong>Account Name:</strong> {booking.accountHolderName}<br />
//                       <strong>Account No:</strong> {booking.accountNumber}<br />
//                       <strong>CVV:</strong> {booking.cvv}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default BookingList;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [showBookings, setShowBookings] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleFetchBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:3001/api/getallbooking");
      if (response.data.success) {
        setBookings(response.data.data);
        setShowBookings(true);
      } else {
        setError("Failed to fetch bookings");
      }
    } catch (err) {
      setError("Error fetching booking data");
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    navigate("/login/admin");
  };
  const sidebarButtonStyle = {
    width: "100%",
    backgroundColor: "#CCBBBB",
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
            backgroundColor: "#F8F8F8",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd",
          }}
        >
          <div>
            <h4 className="text-center mb-4" style={{ color: "#D47D7D", fontWeight: "bold" }}>
              CAR RENTAL SYSTEM
            </h4>
            <ul className="list-unstyled">
              {[
                { name: "CRUD CAR", path: "/admin/crudcar" },
                { name: "LIST RENTER", path: "/admin/renter" },
                { name: "LIST HIRER", path: "/admin/hirer" },
                { name: "CAR LIST", path: "/admin/carlist" },
                { name: "BOOKING", path: "/admin/booking" },
                { name: "BRANDMANAGER", path: "/brand" },
              ].map((item) => (
                <li key={item.name} className="mb-3">
                  <button
                    className="sidebar-link"
                    onClick={() => navigate(item.path)}
                    style={sidebarButtonStyle}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            LOG OUT
          </button>
        </aside>
        {/* Main Content */}
        <div className="col-10 p-4" style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
          <h2 className="text-center mb-4">Booking List</h2>
          <div className="d-flex justify-content-center mb-4">
            <button className="btn btn-primary px-4 py-2" onClick={handleFetchBookings}>
              View All Bookings
            </button>
          </div>
          {loading && <div className="text-center">Loading bookings...</div>}
          {error && <div className="alert alert-danger text-center">{error}</div>}
          {showBookings && (
            <div className="row">
              {bookings.length === 0 ? (
                <div className="col-12 text-center text-muted">No bookings found.</div>
              ) : (
                bookings.map((booking) => (
                  <div key={booking._id} className="col-md-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "12px" }}>
                      <div className="card-body">
                        <h5 className="card-title text-primary mb-3">{booking.carId?.name}</h5>
                        <p className="card-text">
                          <strong>Brand:</strong> {booking.brandId?.name} <br />
                          <strong>Description:</strong> {booking.brandId?.description} <br />
                          <strong>Booked By:</strong> {booking.hirerId?.name} (
                          {booking.hirerId?.email}) <br />
                          <strong>Payment Mode:</strong> {booking.paymentMode} <br />
                          <strong>Account Name:</strong> {booking.accountHolderName} <br />
                          <strong>Account No:</strong> {booking.accountNumber} <br />
                          <strong>CVV:</strong> {booking.cvv}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingList