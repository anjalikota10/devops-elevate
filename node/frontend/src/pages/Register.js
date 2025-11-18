import React, { useState } from "react";
import axios from "axios";


const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://54.196.9.87:5000/api/auth/register",
        form
      );

      alert(res.data.message);

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="main">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />

        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="cpassword" type="password" placeholder="Confirm Password" onChange={handleChange} />

        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
