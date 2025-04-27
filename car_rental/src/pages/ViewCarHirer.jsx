import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewCarHirer = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  // Fetch cars from the backend
  const fetchCars = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/getcar");
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

  const handleLogout = () =>{
    localStorage.removeItem("userId")
    localStorage.removeItem("userType")

    navigate("/login/admin")
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-2 d-flex flex-column justify-content-between bg-light p-3 shadow-sm vh-100">
          <div>
            <h4 className="text-center text-danger fw-bold mb-4">CAR RENTAL SYSTEM</h4>
            <ul className="nav flex-column">
              {[
                { name: "View Car", path: "/viewcarhirer" },
                { name: "MAKE BOOKING", path: "/makebooking" },
                { name: "BOOKING HISTORY", path: "/bookinghistory" },
                { name: "CHANGE PASSWORD", path: "/changepassword" },
              ].map((item) => (
                <li key={item.name} className="nav-item mb-3">
                  <button
                    onClick={() => navigate(item.path)}
                    className="btn btn-outline-danger w-100 fw-semibold"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-danger fw-bold w-100" onClick={handleLogout}>
            LOG OUT
          </button>
        </aside>
        {/* Main Content */}
        <main className="col-md-10 p-5 bg-white">
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

export default ViewCarHirer;
