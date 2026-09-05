import { useState } from "react";
import axios from "axios";

function AddFlight() {
  const [formData, setFormData] = useState({
    airline: "",
    flightNumber: "",
    from: "",
    to: "",
    departureTime: "",
    arrivalTime: "",
    duration: "",
    price: "",
    totalSeats: "",
    availableSeats: "",
    aircraft: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://flight-backend-system.onrender.com/api/flights/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      setFormData({
        airline: "",
        flightNumber: "",
        from: "",
        to: "",
        departureTime: "",
        arrivalTime: "",
        duration: "",
        price: "",
        totalSeats: "",
        availableSeats: "",
        aircraft: "",
      });

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to Add Flight");
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 pt-24 sm:pt-28 pb-10 sm:pb-16">

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8">

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Add Flight
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          <input
            type="text"
            name="airline"
            placeholder="Airline"
            value={formData.airline}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="flightNumber"
            placeholder="Flight Number"
            value={formData.flightNumber}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="from"
            placeholder="From"
            value={formData.from}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="to"
            placeholder="To"
            value={formData.to}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="datetime-local"
            name="departureTime"
            value={formData.departureTime}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="datetime-local"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="number"
            name="totalSeats"
            placeholder="Total Seats"
            value={formData.totalSeats}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="number"
            name="availableSeats"
            placeholder="Available Seats"
            value={formData.availableSeats}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="aircraft"
            placeholder="Aircraft"
            value={formData.aircraft}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full md:col-span-2"
          />

          <button
            type="submit"
            className="w-full md:col-span-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Add Flight
          </button>

        </form>

      </div>

    </section>
  );
}

export default AddFlight;