import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HirerLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", formData);
      if (res.status === 200) {
        const { email } = res.data;

        if (email === "pawangoswami9424@gmail.com") {
          navigate("/admin/dashboard")
        } else {
             navigate("/login/admin");
        }
      }
      setMessage(res.data.msg);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.msg || "Error occurred");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1592898919114-2f23d536cb85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhciUyMHJlbnR8ZW58MHx8MHx8fDA%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px", position: "relative" }}>
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
                paddingRight: "40px",
              }}
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
                fontWeight: "bold",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
            onClick={()=>navigate("/hirer/viewcar")}
          >
            Login
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default HirerLogin
