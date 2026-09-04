import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  Plane,
  User,
  Mail,
  Phone,
  Users,
} from "lucide-react";

function Booking() {

  const { id } = useParams();

  const [flight, setFlight] = useState(null);

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travellers: 1,
    specialRequest: "",
  });

  useEffect(() => {
    getFlight();
  }, []);

  const getFlight = async () => {
    try {

      const res = await axios.get(
        `http://localhost:5000/api/flights/${id}`
      );

      setFlight(res.data.flight);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleBooking = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Login First");
      return;
    }

    const bookingData = {
      flightId: flight._id,

      passengers: [
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
      ],

      seats: ["A1"],
    };

    const res = await axios.post(
      "http://localhost:5000/api/bookings/book",
      bookingData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);

  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Booking Failed");
  }
};

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );

  }

  if (!flight) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Flight Not Found
        </h1>
      </div>
    );

  }

  return (

    <section className="min-h-screen bg-slate-100 pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT PART NEXT */}
                    {/* Passenger Form */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Passenger Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Name */}

              <div>

                <label className="font-medium mb-2 block">
                  Full Name
                </label>

                <div className="flex items-center border rounded-xl px-4">

                  <User size={20} className="text-slate-500" />

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-4 outline-none"
                  />

                </div>

              </div>

              {/* Email */}

              <div>

                <label className="font-medium mb-2 block">
                  Email
                </label>

                <div className="flex items-center border rounded-xl px-4">

                  <Mail size={20} className="text-slate-500" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-4 outline-none"
                  />

                </div>

              </div>

              {/* Phone */}

              <div>

                <label className="font-medium mb-2 block">
                  Phone Number
                </label>

                <div className="flex items-center border rounded-xl px-4">

                  <Phone size={20} className="text-slate-500" />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-4 outline-none"
                  />

                </div>

              </div>

              {/* Travellers */}

              <div>

                <label className="font-medium mb-2 block">
                  Travellers
                </label>

                <div className="flex items-center border rounded-xl px-4">

                  <Users size={20} className="text-slate-500" />

                  <select
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleChange}
                    className="w-full px-3 py-4 outline-none bg-transparent"
                  >

                    <option value="1">1 Traveller</option>
                    <option value="2">2 Travellers</option>
                    <option value="3">3 Travellers</option>
                    <option value="4">4 Travellers</option>
                    <option value="5">5 Travellers</option>

                  </select>

                </div>

              </div>

            </div>

            {/* Special Request */}

            <div className="mt-6">

              <label className="font-medium mb-2 block">
                Special Request
              </label>

              <textarea
                rows="5"
                name="specialRequest"
                placeholder="Any special request..."
                value={formData.specialRequest}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 outline-none resize-none"
              />

            </div>

          </div>

          {/* RIGHT PART NEXT */}
                    {/* Flight Summary */}

          <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-28">

            <div className="flex items-center gap-3 mb-6">

              <Plane
                className="text-blue-600"
                size={28}
              />

              <h2 className="text-2xl font-bold">
                Flight Summary
              </h2>

            </div>

            <div className="space-y-5">

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Airline
                </span>

                <span className="font-semibold">
                  {flight.airline}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Flight No
                </span>

                <span className="font-semibold">
                  {flight.flightNumber}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Route
                </span>

                <span className="font-semibold">
                  {flight.from} → {flight.to}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Departure
                </span>

                <span className="font-semibold text-right">
                  {new Date(flight.departureTime).toLocaleString("en-IN")}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Arrival
                </span>

                <span className="font-semibold text-right">
                  {new Date(flight.arrivalTime).toLocaleString("en-IN")}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Duration
                </span>

                <span className="font-semibold">
                  {flight.duration}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Seats Left
                </span>

                <span className="font-semibold">
                  {flight.availableSeats}
                </span>

              </div>

            </div>

            <hr className="my-8" />

            <div className="flex justify-between items-center">

              <h2 className="text-xl font-bold">
                Total
              </h2>

              <h2 className="text-3xl font-bold text-blue-600">

                ₹
                {flight.price * Number(formData.travellers)}

              </h2>

            </div>

            <button
            onClick={handleBooking}
              className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-4 text-lg font-semibold text-white"
            >
              Confirm Booking
            </button>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Booking;