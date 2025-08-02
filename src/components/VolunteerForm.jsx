import React, { useState } from "react";
import './VolunteerForm.css';


function VolunteerForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for signing up as a volunteer!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="volunteer" className="bg-light p-5">
      <div className="container">
        <h2 className="text-center mb-4">Volunteer With Us</h2>
        <form className="mx-auto" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Why do you want to volunteer?</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default VolunteerForm;
