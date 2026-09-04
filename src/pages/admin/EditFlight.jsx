import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditFlight() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    status: "Scheduled",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFlight();
  }, []);

  const getFlight = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/flights/${id}`
      );

      const f = res.data.flight;

      setFormData({
        airline: f.airline,
        flightNumber: f.flightNumber,
        from: f.from,
        to: f.to,
        departureTime: f.departureTime.slice(0, 16),
        arrivalTime: f.arrivalTime.slice(0, 16),
        duration: f.duration,
        price: f.price,
        totalSeats: f.totalSeats,
        availableSeats: f.availableSeats,
        aircraft: f.aircraft,
        status: f.status,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateFlight = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5000/api/flights/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      navigate("/admin/flights");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Update Failed"
      );
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 pt-28 pb-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold mb-8">
          Edit Flight
        </h1>

        <form
          onSubmit={updateFlight}
          className="grid grid-cols-2 gap-5"
        >
{Object.keys(formData).map((key) => (

  key === "status" ? (

    <select
      key={key}
      name={key}
      value={formData[key]}
      onChange={handleChange}
      className="border p-3 rounded-lg"
    >
      <option value="Scheduled">Scheduled</option>
      <option value="Delayed">Delayed</option>
      <option value="Cancelled">Cancelled</option>
    </select>

  ) : (

    <input
      key={key}
      type={
        key.includes("Time")
          ? "datetime-local"
          : key === "price" ||
            key.includes("Seats")
          ? "number"
          : "text"
      }
      name={key}
      value={formData[key]}
      onChange={handleChange}
      placeholder={key}
      className="border p-3 rounded-lg"
    />

  )

))}

       <button
  disabled={loading}
  className="col-span-2 bg-green-600 text-white py-3 rounded-xl disabled:bg-gray-400"
>
  {loading ? "Updating..." : "Update Flight"}
</button>
          <button
  type="button"
  onClick={() => navigate("/admin/flights")}
  className="col-span-2 bg-gray-600 text-white py-3 rounded-xl hover:bg-gray-700 transition"
>
  Cancel
</button>

        </form>

      </div>
    </section>
  );
}

export default EditFlight;