import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData
    );

    console.log("LOGIN RESPONSE:", res.data);

    localStorage.setItem("token", res.data.token);
    console.log("TOKEN SAVED:", localStorage.getItem("token"));

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    alert(res.data.message);

    if (res.data.user.role === "admin") {
      window.location.href = "/admin/dashboard";
    } else {
      window.location.href = "/";
    }

  } catch (error) {
    alert(
      error.response?.data?.message || "Login Failed"
    );
  }
};

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100">

  <form
    onSubmit={handleLogin}
    className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
  >

    <h1 className="text-3xl font-bold text-center mb-8">
      Login
    </h1>

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
        className="w-full border rounded-xl p-3 outline-none focus:border-blue-500"
      />

    </div>

    {/* Password */}

    <div className="mb-6">

      <label className="block mb-2 font-medium">
        Password
      </label>

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border rounded-xl p-3 outline-none focus:border-blue-500"
      />

    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
    >
      Login
    </button>

    <p className="text-center mt-6">
      Don't have an account?{" "}
      <a
        href="/register"
        className="text-blue-600 font-semibold"
      >
        Register
      </a>
    </p>

  </form>

</section>

  );

}

export default Login;