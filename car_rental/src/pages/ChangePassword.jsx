import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    if (!oldPassword || !newPassword || !confirmPassword) {
      return setError("All fields are required");
      return toast.error("All fields are required")
    }
    if (newPassword !== confirmPassword) {
      return setError("New passwords do not match");
      return toast.error("New passwords do not match")
    }
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post("http://localhost:3001/api/changepassword", {
        userId,
        oldPassword,
        newPassword,
      });
      if (response.data.success) {
        setMessage("Password changed successfully");
        toast.success("Password change successfully")
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError(response.data.message || "Failed to change password");
        toast.error(response.data.message || "Failed to change password");
      }
    } catch (err) {
      setError("An error occurred while changing password");
      toast.error("An error occurred while changing password");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    navigate("/login/admin");
  };
  return (
    <div className="container-fluid">
      <ToastContainer position="top-right" autoClose={3000}  />
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
          <div className="container">
            <h2 className="text-center text-primary mb-4">Change Password</h2>
            {message && <div className="alert alert-success text-center">{message}</div>}
            {error && <div className="alert alert-danger text-center">{error}</div>}
            <form onSubmit={handleChangePassword} className="mx-auto shadow p-4 rounded" style={{ maxWidth: "500px" }}>
              <div className="mb-3">
                <label className="form-label">Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Change Password
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};
export default ChangePassword;