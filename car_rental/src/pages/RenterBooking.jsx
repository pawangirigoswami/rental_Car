import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RenterBooking = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.post("http://localhost:3001/api/getallbooking");
        setBookings(res.data.data || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleStatusChange = async (bookingId, status) => {
    try {
      const res = await axios.post("http://localhost:3001/api/updatebookingstatus", {
        bookingId,
        status
      });

      if (res.data.success) {
        setBookings(prev =>
          prev.map(b => (b._id === bookingId ? { ...b, status } : b))
        );
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Something went wrong while updating booking status.");
    }
  };

  return (
    <div className="container mt-4">
      <button style={{
        backgroundColor:"#d42222",
        borderRadius:"10px",
        marginLeft:"1200px",
        
      }}
      onClick={()=>navigate("/renter/dashboard")}
      >Logout</button>
      <h2 className="mb-4">Renter Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="card mb-3 p-3 shadow">
            <p><strong>Car:</strong> {booking.carId?.name || <span className="text-danger">Not Assigned</span>}</p>
            <p><strong>Brand:</strong> {booking.brandId?.name || "N/A"}</p>
            <p><strong>Hirer:</strong> {booking.hirerId?.name || "N/A"}</p>
            <p><strong>Email:</strong> {booking.hirerId?.email || "N/A"}</p>
            <p><strong>Payment Mode:</strong> {booking.paymentMode || "N/A"}</p>
            <p><strong>Status:</strong> <span className="text-capitalize">{booking.status}</span></p>

            {booking.status?.toLowerCase() === "pending" && (
              <div className="mt-2">
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleStatusChange(booking._id, "approved")}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleStatusChange(booking._id, "rejected")}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RenterBooking;
