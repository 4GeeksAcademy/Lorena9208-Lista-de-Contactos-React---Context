import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const AddContact = () => {

  const { id } = useParams();
  const { store } = useGlobalReducer();

 
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });


  useEffect(() => {
    
    if (id && store.agendas) {
      const contactToEdit = store.agendas
        .flatMap((a) => a.contacts)
        .find((c) => c.id == id);
      if (contactToEdit) {
        setFormData({
          full_name: contactToEdit.full_name || "",
          email: contactToEdit.email || "",
          phone: contactToEdit.phone || "",
          address: contactToEdit.address || "",
        });
      }
    }
  }, [id, store.agendas]);


  const handleChange = (el) => {
    setFormData({ ...formData, [el.target.name]: el.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

    <div className="container mt-4">
      <h2 className="text-center">Add New Contact</h2>

      <form onSubmit={handleSubmit} className="w-75 mx-auto pt-4 text-start">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Full name"
          />
        </div>


        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>


        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone"
          />
        </div>


        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </div>


        <button type="submit" className="btn btn-primary w-100">
          Save
        </button>


        <div className="text-start">
          <Link to="/" className="btn btn-link">
            or get back to contacts
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AddContact