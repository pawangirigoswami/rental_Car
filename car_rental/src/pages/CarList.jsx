import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch cars from the backend
  const fetchCars = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/getcar");
      // console.log(response.data.cars);
      if (response.data.success) {
        setCars(response.data.cars);
      } else {
        setError("Failed to fetch cars");
      }
    } catch (err) {
      setError("Something went wrong while fetching car list");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    navigate("/login/admin");
  };

  console.log(cars.name)

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
          <h2 className="text-center mb-4 text-primary">Available Cars</h2>

          {loading && <div className="text-center">Loading cars...</div>}
          {error && <div className="alert alert-danger text-center">{error}</div>}

          {!loading && !error && (
            <div className="row">
              {cars.length === 0 ? (
                <div className="col-12 text-center text-muted">No cars found.</div>
              ) : (
                cars.map((car) => (
                  <div className="col-md-4 mb-4" key={car._id}>
                    <div className="card">
                      
                      <img
                        src={`http://localhost:3001/uploads/${car.image}`}
                        className="card-img-top"
                        alt={car.name}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h3 className="card-title">car name:  {car.name}</h3>
                        <h5 className="card-text">car price ₹{car.price}</h5>
                        <h5 className="card-text">{car.description}</h5>
                      </div>
                      
                    </div>
                    
                  </div>
                ))
              )}
              
            </div>
            
            
          )}
          </main>
        </div>
        
      </div>
      


  );
};

export default CarList;
