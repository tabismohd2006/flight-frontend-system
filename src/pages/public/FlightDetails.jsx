import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import {
  Plane,
  Clock,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";

function FlightDetails() {
  const { id } = useParams();

  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFlight();
  }, []);

  const getFlight = async () => {
    try {
      const res = await axios.get(
        `https://flight-backend-system.onrender.com/api/flights/${id}`
      );

      setFlight(res.data.flight);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  if (!flight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Flight Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 min-h-screen pt-24 sm:pt-28 pb-10 sm:pb-16">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">

          {/* Airline */}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

            <div>

              <h1 className="text-3xl sm:text-4xl font-bold">
                {flight.airline}
              </h1>

              <p className="text-slate-500 mt-2">
                {flight.flightNumber}
              </p>

            </div>

            <Plane
              size={55}
              className="text-blue-600"
            />

          </div>

          {/* Flight Information */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

            {/* Left */}

            <div className="space-y-6">

              <div className="flex items-center gap-3">

                <MapPin className="text-blue-600 shrink-0" />

                <div>

                  <p className="text-slate-500">
                    From
                  </p>

                  <h2 className="text-xl font-semibold">
                    {flight.from}
                  </h2>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="text-green-600 shrink-0" />

                <div>

                  <p className="text-slate-500">
                    To
                  </p>

                  <h2 className="text-xl font-semibold">
                    {flight.to}
                  </h2>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Clock className="text-orange-500 shrink-0" />

                <div>

                  <p className="text-slate-500">
                    Departure
                  </p>

                  <h2 className="text-lg font-semibold">
                    {new Date(flight.departureTime).toLocaleString("en-IN")}
                  </h2>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Clock className="text-red-500 shrink-0" />

                <div>

                  <p className="text-slate-500">
                    Arrival
                  </p>

                  <h2 className="text-lg font-semibold">
                    {new Date(flight.arrivalTime).toLocaleString("en-IN")}
                  </h2>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-slate-100 rounded-2xl p-6">

              <div className="flex items-center gap-3 mb-5">

                <Calendar className="text-blue-600" />

                <span className="font-semibold">
                  {new Date(flight.departureTime).toDateString()}
                </span>

              </div>

              <div className="flex items-center gap-3 mb-5">

                <Clock className="text-blue-600" />

                <span className="font-semibold">
                  {flight.duration}
                </span>

              </div>

              <div className="flex items-center gap-3 mb-8">

                <Users className="text-blue-600" />

                <span className="font-semibold">
                  {flight.availableSeats} Seats Left
                </span>

              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
                ₹{flight.price}
              </h2>

              <Link
                to={`/booking/${flight._id}`}
                className="mt-8 block w-full rounded-xl bg-blue-600 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Book Now
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FlightDetails;