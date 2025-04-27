import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const HirerRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone:"",
    address:"",
    userType:"",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/users", formData);
      setMessage(res.data.msg);
      navigate("/login"); // ✅ Corrected navigation
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.msg || "Error occurred");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://thumbs.dreamstime.com/z/sign-up-text-concept-green-digital-world-map-background-48017607.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "0px" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter the Name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              required
            />
          </div>
          <div style={{ marginBottom: "0px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter the Email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              required
            />
          </div>
          <div style={{ marginBottom: "0px", position: "relative" }}>
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter the Password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "blue",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div style={{marginBottom:"0px"}}>
             <label>Phone</label>
             <input type="text"
             name = "phone"
             placeholder="Enter your phone"
             value={formData.phone}
             onChange={handleChange}
             style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
             required
             />

          </div>

          <div style={{marginBottom:"0px"}}>
            <label>Adderss</label>
            <input 
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            required
            />
          </div>

          <div style={{marginBottom:"8px"}}>
            <label>User Type:</label>
            <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            required
           
            >
              <option value="">Select User Type</option>
              <option value="admin">Admin</option>
              <option value="renter">Renter</option>
              <option value="hirer">Hirer</option>
            </select>
          </div>




          <button
            type="submit"
            style={{
              padding: "10px 15px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
              width: "100%",
              borderRadius: "5px",
            }}
            onClick={()=>navigate("/login/admin")}
          >
            Sign Up
          </button>
          {message && <p>{message}</p>}
        </form>
        <div style={{ marginTop: "20px" }}>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HirerRegister;
