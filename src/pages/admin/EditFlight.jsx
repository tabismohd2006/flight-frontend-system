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
        `https://flight-backend-system.onrender.com/api/flights/${id}`
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

    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `https://flight-backend-system.onrender.com/api/flights/${id}`,
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 pt-24 sm:pt-28 pb-10 sm:pb-16">

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">

          <h1 className="text-3xl sm:text-4xl font-bold mb-8">
            Edit Flight
          </h1>

          <form
            onSubmit={updateFlight}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >

            {Object.keys(formData).map((key) =>
              key === "status" ? (
                <select
                  key={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="border rounded-xl p-3 w-full"
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
                  className="border rounded-xl p-3 w-full"
                />
              )
            )}

            <button
              disabled={loading}
              className="md:col-span-2 bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl disabled:bg-gray-400"
            >
              {loading ? "Updating..." : "Update Flight"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/flights")}
              className="md:col-span-2 bg-gray-600 hover:bg-gray-700 transition text-white py-3 rounded-xl"
            >
              Cancel
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default EditFlight;