import { useEffect, useState } from "react";
import { Plane, Search, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

function Flights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [selectedAirline, setSelectedAirline] = useState("");
  const [travelDate, setTravelDate] = useState("");

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
    } finally {
      setLoading(false);
    }
  };

  const filteredFlights = flights
    .filter((flight) => {
      const fromMatch = flight.from
        .toLowerCase()
        .includes(searchFrom.toLowerCase());

      const toMatch = flight.to
        .toLowerCase()
        .includes(searchTo.toLowerCase());

      const airlineMatch =
        selectedAirline === "" ||
        flight.airline === selectedAirline;

      const dateMatch =
        travelDate === "" ||
        flight.departureTime.slice(0, 10) === travelDate;

      return (
        fromMatch &&
        toMatch &&
        airlineMatch &&
        dateMatch
      );
    })
    .sort((a, b) => {
      if (sortPrice === "low") {
        return a.price - b.price;
      }

      if (sortPrice === "high") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <section className="min-h-screen bg-slate-50 pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            Find Your Flight
          </h1>

          <p className="mt-4 text-slate-500">
            Compare airlines and book your next journey.
          </p>

        </div>

        {/* Search */}

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

            <input
              type="text"
              placeholder="From"
              value={searchFrom}
              onChange={(e) =>
                setSearchFrom(e.target.value)
              }
              className="border rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="To"
              value={searchTo}
              onChange={(e) =>
                setSearchTo(e.target.value)
              }
              className="border rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="date"
              value={travelDate}
              onChange={(e) =>
                setTravelDate(e.target.value)
              }
              className="border rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <select
              value={selectedAirline}
              onChange={(e) =>
                setSelectedAirline(e.target.value)
              }
              className="border rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">All Airlines</option>

              {[...new Set(flights.map((f) => f.airline))].map(
                (airline) => (
                  <option
                    key={airline}
                    value={airline}
                  >
                    {airline}
                  </option>
                )
              )}
            </select>

            <select
              value={sortPrice}
              onChange={(e) =>
                setSortPrice(e.target.value)
              }
              className="border rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Sort Price</option>
              <option value="low">
                Low to High
              </option>
              <option value="high">
                High to Low
              </option>
            </select>
                        <button
              className="bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition"
            >
              <Search size={20} />
              Search
            </button>

            <button
              onClick={() => {
                setSearchFrom("");
                setSearchTo("");
                setSortPrice("");
                setSelectedAirline("");
                setTravelDate("");
              }}
              className="bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition"
            >
              Clear
            </button>

          </div>

        </div>

        {/* Flights */}

        <div className="mt-12 space-y-6">

          {loading ? (

            <div className="text-center py-20">

              <h2 className="text-xl font-semibold text-slate-600">
                Loading Flights...
              </h2>

            </div>

          ) : filteredFlights.length === 0 ? (

            <div className="text-center py-20">

              <Plane
                size={60}
                className="mx-auto text-slate-400"
              />

              <h2 className="mt-5 text-2xl font-bold text-slate-700">
                No Flights Found
              </h2>

              <p className="mt-2 text-slate-500">
                Try searching another destination.
              </p>

            </div>

          ) : (

            filteredFlights.map((flight) => (

              <div
                key={flight._id}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
              >

                <div className="grid lg:grid-cols-5 gap-6 items-center">

                  {/* Airline */}

                  <div>

                    <h2 className="text-2xl font-bold">
                      {flight.airline}
                    </h2>

                    <p className="text-slate-500">
                      {flight.flightNumber}
                    </p>

                  </div>

                  {/* Route */}

                  <div>

                    <h3 className="font-semibold text-lg">
                      {flight.from}
                    </h3>

                    <p className="text-slate-400">
                      To
                    </p>

                    <h3 className="font-semibold text-lg">
                      {flight.to}
                    </h3>

                  </div>

                  {/* Time */}

                  <div>

                    <div className="flex items-center gap-2">

                      <Clock size={18} />

                      <span>
                        {new Date(flight.departureTime).toLocaleString("en-IN")}
                      </span>

                    </div>

                    <p className="mt-2 text-slate-500">
                      {flight.duration}
                    </p>

                  </div>
                                    {/* Price */}

                  <div>

                    <h2 className="text-3xl font-bold text-blue-600">
                      ₹{flight.price}
                    </h2>

                    <div className="flex items-center gap-2 mt-2">

                      <Users size={18} />

                      <span>
                        {flight.availableSeats} Seats
                      </span>

                    </div>

                  </div>

                  {/* Button */}

                  <div className="flex justify-end">

                    <Link
                      to={`/flight/${flight._id}`}
                      className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-semibold"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </section>
  );
}

export default Flights;