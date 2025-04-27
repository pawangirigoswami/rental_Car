import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const MakeBooking = () => {
  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Fetch all available cars from the server
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.post("http://localhost:3001/api/getcar");
        console.log("Fetched cars:", response.data.cars);
        setCars(response.data.cars);
      } catch (error) {
        setMessage("Failed to fetch cars");
      }
    };

    fetchCars();
  }, []);

  // Update brandId when selectedCarId or cars change
  useEffect(() => {
    const selectedCar = cars.find((car) => car._id === selectedCarId);
    console.log("Selected car object:", selectedCar);
    if (selectedCar && selectedCar.brandId) {
      setBrandId(selectedCar.brandId);
    } else {
      setBrandId("");
    }
  }, [selectedCarId, cars]);

  // Handle booking submission
  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const hirerId = localStorage.getItem("userId");

    console.log("hirerId:", hirerId);
    console.log("carId:", selectedCarId);
    console.log("brandId:", brandId);

    if (!hirerId || !brandId || !selectedCarId) {
      setMessage("Missing required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/api/createbooking", {
        hirerId,
        brandId,
        carId: selectedCarId,
        paymentMode,
        accountHolderName,
        accountNumber,
        cvv,
      });

      if (res.data.success) {
        setMessage("Booking submitted for approval!");
        toast.success("Booking submitted for approvel!");
      } else {
        setMessage("Booking failed. Try again.");
        toast.error("Booking failed. Try again.")
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Something went wrong while booking.");
      toast.error(err.response?.data?.message || "Something went wrong while booking.")
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogout = () =>{
    localStorage.removeItem("userId")
    localStorage.removeItem("userType")

    navigate("/login/admin")
  }

  return (
    <div className="container-fluid">
      <ToastContainer position="top-right" autoClose = {3000}   />
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
    <div className="container mt-4">
      <h2 className="text-center text-primary">Make a Booking</h2>
      {message && <div className="alert alert-info text-center">{message}</div>}

      <form onSubmit={handleBooking}>
  {/* Optional Hidden Fields */}
  <input
    type="hidden"
    name="hirerId"
    value={localStorage.getItem("userId") || ""}
  />
  <input
    type="hidden"
    name="carId"
    value={selectedCarId}
  />
  <input
    type="hidden"
    name="brandId"
    value={brandId}
  />

  <div className="mb-3">
    <label htmlFor="car" className="form-label">Select a Car:</label>
    <select
      id="car"
      className="form-select"
      value={selectedCarId}
      onChange={(e) => {
        const id = e.target.value;
        setSelectedCarId(id);
        const selected = cars.find((car) => car._id === id);
        setBrandId(selected?.brandId || ""); // Ensures controlled input
      }}
      
      required
    >
      <option value="">-- Choose a car --</option>
      {cars.map((car) => (
        <option key={car._id} value={car._id}>
          {car.name}
        </option>
      ))}
    </select>
  </div>

  <div className="mb-3">
    <label htmlFor="paymentMode" className="form-label">Payment Mode:</label>
    <select
      id="paymentMode"
      className="form-select"
      value={paymentMode}
      onChange={(e) => setPaymentMode(e.target.value)}
      required
    >
      <option value="">-- Select Payment Method --</option>
      <option value="Credit Card">Credit Card</option>
      <option value="Debit Card">Debit Card</option>
      <option value="UPI">UPI</option>
      <option value="Net Banking">Net Banking</option>
      <option value="Cash">Cash</option>
    </select>
  </div>

  <div className="mb-3">
    <label className="form-label">Account Holder Name:</label>
    <input
      type="text"
      className="form-control"
      value={accountHolderName}
      onChange={(e) => setAccountHolderName(e.target.value)}
      required
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Account Number:</label>
    <input
      type="text"
      className="form-control"
      value={accountNumber}
      onChange={(e) => setAccountNumber(e.target.value)}
      required
    />
  </div>

  <div className="mb-3">
    <label className="form-label">CVV:</label>
    <input
      type="password"
      className="form-control"
      value={cvv}
      onChange={(e) => setCvv(e.target.value)}
      required
    />
  </div>

  <button type="submit" className="btn btn-success w-100" disabled={loading}>
    {loading ? "Booking..." : "Book Now"}
  </button>
</form>

    </div>
    </main>
    </div>
    </div>
    
  );
};

export default MakeBooking;
