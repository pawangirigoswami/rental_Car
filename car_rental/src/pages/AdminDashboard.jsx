import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  const handleLogout = () =>{
    localStorage.removeItem("userId")
    localStorage.removeItem("userType")

    navigate("/login/admin")
  }


  return (
    
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside
          className="col-md-2 d-flex flex-column justify-content-between"
          style={{
            backgroundColor: "#F0F2F5",
            padding: "20px",
            height: "100vh",
            borderRight: "1px solid #ddd",
          }}
        >
          <div>
            <h4 className="text-center mb-4" style={{ color: "#D47D7D", fontWeight: "bold" }}>
              CAR RENTAL SYSTEM
            </h4>
            <ul className="nav flex-column">
              {[
                { name: "ADD CAR", path: "/admin/crudcar" },
                { name: "LIST RENTER", path: "/admin/renter" },
                { name: "LIST HIRER", path: "/admin/hirer" },
                { name: "CAR LIST", path: "/admin/carlist" },
                { name: "BOOKING", path: "/admin/booking" },
                { name: "ADD BRAND", path: "/brand" },
              ].map((item) => (
                <li key={item.name} className="mb-3">
                  <button
                    onClick={() => navigate(item.path)}
                    style={{
                      width: "100%",
                      backgroundColor: "#CCBBBB",
                      color: "#fff",
                      border: "none",
                      padding: "10px",
                      borderRadius: "5px",
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
            LOG OUT
          </button>
        </aside>
        {/* Main Content */}
        <main className="col-md-10 p-4" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwcmVudHxlbnwwfHwwfHx8MA%3D%3D')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
          </main>
        </div>
        
      </div>
    
  );
};

export default AdminDashboard;
