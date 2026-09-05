import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageFlights() {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFlights();
  }, []);

  const getFlights = async () => {
    try {
      const res = await axios.get(
        "https://flight-backend-system.onrender.com/api/flights"
      );

      setFlights(res.data.flights);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFlight = async (id) => {
    const ok = window.confirm("Delete this flight?");

    if (!ok) return;

    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(
        `https://flight-backend-system.onrender.com/api/flights/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      getFlights();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Delete Failed"
      );
    }
  };

  const filteredFlights = flights.filter((flight) => {
    return (
      flight.airline
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      flight.flightNumber
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      flight.from
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      flight.to
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <section className="min-h-screen bg-slate-100 pt-24 sm:pt-28 pb-10 sm:pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          Manage Flights
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-8">

          <input
            type="text"
            placeholder="Search Flight..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 w-full lg:w-96"
          />

          <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center">
            Total Flights : {filteredFlights.length}
          </div>

        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <div className="overflow-x-auto">

            <table className="min-w-[800px] w-full">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-4 text-left">Flight</th>
                  <th className="p-4 text-left">Route</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Seats</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>

              </thead>

              <tbody>

                {filteredFlights.length === 0 ? (

                  <tr>

                    <td
                      colSpan="5"
                      className="text-center py-10 text-lg"
                    >
                      No Flights Found
                    </td>

                  </tr>

                ) : (

                  filteredFlights.map((flight) => (

                    <tr
                      key={flight._id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4 whitespace-nowrap">
                        <div className="font-semibold">
                          {flight.airline}
                        </div>

                        <div className="text-sm text-gray-500">
                          {flight.flightNumber}
                        </div>
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        {flight.from} → {flight.to}
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        ₹{flight.price}
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        {flight.availableSeats}
                      </td>

                      <td className="p-4 whitespace-nowrap">

                        <div className="flex gap-2">

                          <Link
                            to={`/admin/edit-flight/${flight._id}`}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() =>
                              deleteFlight(flight._id)
                            }
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ManageFlights;