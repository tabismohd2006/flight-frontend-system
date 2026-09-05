import { useEffect, useState } from "react";
import axios from "axios";

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/bookings/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    return (
      booking.user?.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      booking.user?.email
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      booking.flight?.flightNumber
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <section className="min-h-screen bg-slate-100 pt-24 sm:pt-28 pb-10 sm:pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          Manage Bookings
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-8">

          <input
            type="text"
            placeholder="Search Booking..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 w-full lg:w-96"
          />

          <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center">
            Total Bookings : {filteredBookings.length}
          </div>

        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <div className="overflow-x-auto">

            <table className="min-w-[900px] w-full">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-4 text-left">User</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Flight</th>
                  <th className="p-4 text-left">Route</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Payment</th>
                </tr>

              </thead>

              <tbody>

                {filteredBookings.length === 0 ? (

                  <tr>
                    <td
                      colSpan="7"
                      className="text-center py-10 text-lg"
                    >
                      No Bookings Found
                    </td>
                  </tr>

                ) : (

                  filteredBookings.map((booking) => (

                    <tr
                      key={booking._id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4 whitespace-nowrap">
                        {booking.user?.name}
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        {booking.user?.email}
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        {booking.flight?.flightNumber}
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        {booking.flight?.from} → {booking.flight?.to}
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        ₹{booking.totalAmount}
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        {booking.bookingStatus}
                      </td>

                      <td className="p-4 whitespace-nowrap">

                        <span
                          className={`px-3 py-1 rounded-full text-white text-sm ${
                            booking.paymentStatus === "Paid"
                              ? "bg-green-600"
                              : "bg-red-600"
                          }`}
                        >
                          {booking.paymentStatus}
                        </span>

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

export default ManageBookings;