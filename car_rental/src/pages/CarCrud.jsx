import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CrudCar = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brandId: "",
    image: null,
    price: "",
  });
  const [editingCarId, setEditingCarId] = useState(null);
  const navigate = useNavigate();
  const fetchCars = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/getcar");
      setCars(res.data.cars);
    } catch (err) {
      console.error("Error fetching cars:", err.message);
    }
  };
  const fetchBrands = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/getbrand");
      setBrands(res.data.data);
    } catch (err) {
      console.error("Error fetching brands:", err.message);
    }
  };
  useEffect(() => {
    fetchCars();
    fetchBrands();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    navigate("/login/admin");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("brandId", formData.brandId);
    data.append("price", formData.price);
    if (formData.image) {
      data.append("image", formData.image);
    }
    try {
      if (editingCarId) {
        data.append("id", editingCarId);
        await axios.post("http://localhost:3001/api/updatecar", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Car Updated successfully")
      } else {
        await axios.post("http://localhost:3001/api/addcar", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Car Add successfully")
      }
      setFormData({
        name: "",
        description: "",
        brandId: "",
        image: null,
        price: "",
      });
      setEditingCarId(null);
      fetchCars();
    } catch (err) {
      console.error("Error adding/updating car:", err.message);
      toast.error("something went wrong")
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.post("http://localhost:3001/api/deletecar", { id });
      toast.info("Car delete successfully")
      fetchCars();
    } catch (err) {
      console.error("Error deleting car:", err.message);
      toast.success("Error delete car")
    }
  };
  const handleEdit = (car) => {
    setFormData({
      name: car.name,
      description: car.description,
      brandId: car.brandId?._id || "",
      image: null,
      price: car.price || "",
    });
    setEditingCarId(car._id);
  };
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
          <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
            Manage Cars
          </h2>
          <form onSubmit={handleSubmit} className="row g-3 mb-4">
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="Car Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
            </div>
            <div className="col-md-2">
              <select
                className="form-select"
                value={formData.brandId}
                onChange={(e) => setFormData({ ...formData, brandId: e.target.value })}
                required
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand._id} value={brand._id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-success w-100">
                {editingCarId ? "Update Car" : "Add Car"}
              </button>
            </div>
          </form>
          <div className="table-responsive">
            <table className="table table-striped table-bordered text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car._id}>
                    <td>{car.name}</td>
                    <td>{car.description}</td>
                    <td>₹{car.price}</td>
                    <td>{car.brandId?.name || "Unknown"}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(car)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(car._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ToastContainer/>
          </div>
        </main>
      </div>
    </div>
  );
};
export default CrudCar