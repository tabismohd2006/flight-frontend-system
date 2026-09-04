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

    <section className="min-h-screen bg-slate-100 pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold mb-8">

          Manage Bookings

        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

  <input
    type="text"
    placeholder="Search Booking..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border rounded-xl px-4 py-3 w-full md:w-96"
  />

  <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
    Total Bookings : {filteredBookings.length}
  </div>

</div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="p-4">User</th>
                <th>Email</th>
                <th>Flight</th>
                <th>Route</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment</th>

              </tr>

            </thead>

          <tbody>

  {filteredBookings.length === 0 ? (

    <tr>
      <td
        colSpan="7"
        className="text-center py-10 text-xl"
      >
        No Bookings Found
      </td>
    </tr>

  ) : (

    filteredBookings.map((booking) => (

      <tr
        key={booking._id}
        className="text-center border-b"
      >

        <td className="p-4">
          {booking.user?.name}
        </td>

        <td>
          {booking.user?.email}
        </td>

        <td>
          {booking.flight?.flightNumber}
        </td>

        <td>
          {booking.flight?.from} → {booking.flight?.to}
        </td>

        <td>
          ₹{booking.totalAmount}
        </td>

        <td>
          {booking.bookingStatus}
        </td>

        <td>
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

    </section>

  );

}

export default ManageBookings;