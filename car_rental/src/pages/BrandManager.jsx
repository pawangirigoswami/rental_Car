import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const BrandManager = () => {
  const [brands, setBrands] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [editingBrandId, setEditingBrandId] = useState(null);
  const navigate = useNavigate();

  const fetchBrands = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/getbrand");
      console.log(res)
      setBrands(res.data.data); // corrected: res.data.data instead of res.data.brands
    } catch (err) {
      console.error("Error fetching brands:", err.message);
      toast.error("failed to fetch brand")
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    navigate("/login/admin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBrandId) {
        await axios.post("http://localhost:3001/api/updatebrand", {
          id: editingBrandId,
          ...formData,
        });
        toast.success("Brand Updated successfully")
      } else {
        await axios.post("http://localhost:3001/api/addbrand", formData);
        toast.success("Brand Add Successfully")
      }
      setFormData({ name: "", description: "" });
      setEditingBrandId(null);
      fetchBrands();
    } catch (err) {
      console.error("Error adding/updating brand:", err.message);
      toast.error("Operation failed")
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this brand?");
    if (!confirmDelete) return;

    try {
      await axios.post("http://localhost:3001/api/deletebrand", { id });
      toast.success("Brand delete successfully")
      fetchBrands();
    } catch (err) {
      console.error("Error deleting brand:", err.message);
      toast.error("failed to delete brand")
    }
  };

  const handleEdit = (brand) => {
    setFormData({ name: brand.name, description: brand.description });
    setEditingBrandId(brand._id);
  };

  const handleCancelEdit = () => {
    setFormData({ name: "", description: "" });
    setEditingBrandId(null);
  };

  return (
    <div className="container-fluid">
      <>
  {/* ...Your JSX content... */}
  <ToastContainer position="top-right" autoClose={3000} />
</>

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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Brands</h2>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-4 mb-2">
            <input
              type="text"
              placeholder="Brand Name"
              className="form-control"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-4 mb-2">
            <input
              type="text"
              placeholder="Description"
              className="form-control"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-4 mb-2">
            <button type="submit" className="btn btn-primary w-100">
              {editingBrandId ? "Update Brand" : "Add Brand"}
            </button>
            {editingBrandId && (
              <button
                type="button"
                className="btn btn-secondary w-100 mt-2"
                onClick={handleCancelEdit}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </div>
      </form>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                No brands found
              </td>
            </tr>
          ) : (
            brands.map((brand) => (
              <tr key={brand._id}>
                <td>{brand.name}</td>
                <td>{brand.description}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(brand)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(brand._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </main>
    </div>
    </div>
    
  );
};

export default BrandManager;
