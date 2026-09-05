import { useEffect, useState } from "react";
import axios from "axios";
import { Plane, Calendar, MapPin } from "lucide-react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://flight-backend-system.onrender.com/api/bookings/my-bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Bookings Response:", res.data);

      setBookings(res.data.bookings || []);
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          "Failed to load bookings"
      );
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `https://flight-backend-system.onrender.com/api/bookings/cancel/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      getBookings();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Cancel Failed"
      );
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

  return (
    <section className="min-h-screen bg-slate-100 pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold mb-10">
          My Bookings
        </h1>

        {bookings.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-10 text-center">
            <h2 className="text-2xl font-bold">
              No Bookings Found
            </h2>
          </div>

        ) : (

          <div className="grid lg:grid-cols-2 gap-8">

            {bookings.map((booking) => (

              <div
                key={booking._id}
                className="bg-white rounded-3xl shadow-xl p-8"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-2xl font-bold">
                      {booking.flight?.airline || "Flight Deleted"}
                    </h2>

                    <p className="text-slate-500">
                      {booking.flight?.flightNumber || "-"}
                    </p>

                  </div>

                  <Plane
                    className="text-blue-600"
                    size={40}
                  />

                </div>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">

                    <MapPin className="text-blue-600" />

                    <span>
                      {booking.flight?.from} → {booking.flight?.to}
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Calendar className="text-green-600" />

                    <span>
                      {booking.flight
                        ? new Date(
                            booking.flight.departureTime
                          ).toLocaleString("en-IN")
                        : "N/A"}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="font-semibold">
                      Passengers
                    </span>

                    <span>
                      {booking.passengers?.length || 0}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="font-semibold">
                      Total Amount
                    </span>

                    <span className="font-bold text-blue-600">
                      ₹{booking.totalAmount}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="font-semibold">
                      Payment
                    </span>

                    <span>
                      {booking.paymentStatus}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="font-semibold">
                      Booking
                    </span>

                    <span>
                      {booking.bookingStatus}
                    </span>

                  </div>

                  {booking.bookingStatus !== "Cancelled" && (

                    <button
                      onClick={() =>
                        cancelBooking(booking._id)
                      }
                      className="w-full mt-6 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
                    >
                      Cancel Booking
                    </button>

                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default MyBookings;