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
        "http://localhost:5000/api/flights"
      );

      setFlights(res.data.flights);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteFlight = async (id) => {

    const ok = window.confirm(
      "Delete this flight?"
    );

    if (!ok) return;

    try {

      const token = localStorage.getItem("token");

      const res = await axios.delete(
        `http://localhost:5000/api/flights/${id}`,
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
    <section className="min-h-screen bg-slate-100 pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold mb-8">
          Manage Flights
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

  <input
    type="text"
    placeholder="Search Flight..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border rounded-xl px-4 py-3 w-full md:w-96"
  />

  <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">

    Total Flights : {filteredFlights.length}

  </div>

</div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>
                <th className="p-4">Flight</th>
                <th>Route</th>
                <th>Price</th>
                <th>Seats</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

  filteredFlights.length === 0 ? (

    <tr>

      <td
        colSpan="5"
        className="text-center py-10 text-xl"
      >
        No Flights Found
      </td>

    </tr>

              {filteredFlights.map((flight) => (

                <tr
                  key={flight._id}
                  className="border-b text-center"
                >

                  <td className="p-4">
                    {flight.airline}
                    <br />
                    {flight.flightNumber}
                  </td>

                  <td>
                    {flight.from} → {flight.to}
                  </td>

                  <td>
                    ₹{flight.price}
                  </td>

                  <td>
                    {flight.availableSeats}
                  </td>

                  <td className="space-x-2">

                    <Link
                      to={`/admin/edit-flight/${flight._id}`}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        deleteFlight(flight._id)
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default ManageFlights;