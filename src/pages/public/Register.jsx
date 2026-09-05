import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(res.data.message);

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      <form
        onSubmit={handleRegister}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
      >

        <h1 className="text-3xl font-bold text-center mb-8">
          Create Account
        </h1>

        {/* Name */}

        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3 outline-none focus:border-blue-500"
          />

        </div>

        {/* Email */}

        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3 outline-none focus:border-blue-500"
          />

        </div>

        {/* Password */}

        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3 outline-none focus:border-blue-500"
          />

        </div>

        {/* Phone */}

        <div className="mb-6">

          <label className="block mb-2 font-medium">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-xl p-3 outline-none focus:border-blue-500"
          />

        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Register
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </form>

    </section>
  );
}

export default Register;