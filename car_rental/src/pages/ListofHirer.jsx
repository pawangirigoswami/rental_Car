import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is installed

const ListofHirer = () => {
  const navigate = useNavigate();
  const [hirer, setHirer] = useState([]);

  useEffect(() => {
    fetchHirer();
  }, []);

  const fetchHirer = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/getallhirer");
      if (response.data.success) {
        setHirer(response.data.data);
      } else {
        console.error("Failed to fetch hirer");
      }
    } catch (err) {
      console.error("Error fetching hirer:", err.message);
    }
  };

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
              { name: "CRUD CAR", path: "/admin/crudcar" },
              { name: "LIST RENTER", path: "/admin/renter" },
              { name: "LIST HIRER", path: "/admin/hirer" },
              { name: "CAR LIST", path: "/admin/carlist" },
              { name: "BOOKING", path: "/admin/booking" },
              { name: "BRANDMANAGER", path: "/brand" },
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
          <div className="container mt-5">
            <h2 className="text-center mb-4">List of Hirer</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    {/* Add other renter fields if needed */}
                  </tr>
                </thead>
                <tbody>
  {Array.isArray(hirer) && hirer.length > 0 ? (
    hirer.map((hirer, index) => (
      <tr key={hirer._id}>
        <td>{index + 1}</td>
        <td>{hirer.name}</td>
        <td>{hirer.email}</td>
        <td>{hirer.phone}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="text-center">No hirer found.</td>
    </tr>
  )}
</tbody>

              </table>
            </div>
          </div>
          </main>
        </div>
      </div>
  
  );
};

export default ListofHirer;
