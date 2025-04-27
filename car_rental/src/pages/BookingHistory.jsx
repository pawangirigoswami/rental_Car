import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      setMessage("");

      try {
        const userId = localStorage.getItem("userId");
        console.log(userId);

        const response = await axios.post("http://localhost:3001/api/getallbooking", {
          userId,
        });

        console.log(response.data.data);

        if (response.data.success) {
          setBookings(response.data.data);
        } else {
          setMessage("Failed to fetch booking history");
        }
      } catch (error) {
        setMessage("Something went wrong fetching bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
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
          <h2 className="text-center text-primary mb-3">Booking History</h2>

          {loading && <div className="text-center">Loading your bookings...</div>}
          {message && <div className="alert alert-danger text-center">{message}</div>}

          {!loading && bookings.length === 0 && (
            <div className="text-center text-muted">No bookings found.</div>
          )}

          {!loading && bookings.length > 0 && (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Car Name</th>
                    <th>Status</th>
                    <th>Booking Date</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => {
                    const status = booking.status?.toLowerCase();

                    return (
                      <tr key={booking._id}>
                        <td>{booking.carId?.name || booking.brandId?.name || "N/A"}</td>
                        <td>
                          {status === "pending" && (
                            <span className="badge bg-warning text-dark">Pending</span>
                          )}
                          {status === "approved" && (
                            <span className="badge bg-success">Approved</span>
                          )}
                          {status === "rejected" && (
                            <span className="badge bg-danger">Rejected</span>
                          )}
                        </td>
                        <td>{new Date(booking.bookingDate).toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          </main>
        </div>
      </div>
    
  );
};

export default BookingHistory;
