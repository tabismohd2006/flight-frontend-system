import { useEffect, useState } from "react";
import axios from "axios";

function Reports() {
  const [report, setReport] = useState({
    users: 0,
    flights: 0,
    bookings: 0,
    revenue: 0,
  });

  useEffect(() => {
    getReport();
  }, []);

  const getReport = async () => {
    try {
      const token = localStorage.getItem("token");

      const [users, flights, bookings] = await Promise.all([
        axios.get("https://flight-backend-system.onrender.com/api/auth/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),

        axios.get("https://flight-backend-system.onrender.com/api/flights"),

        axios.get("https://flight-backend-system.onrender.com/api/bookings/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      const totalRevenue = bookings.data.bookings.reduce(
        (sum, b) => sum + b.totalAmount,
        0
      );

      setReport({
        users: users.data.users.length,
        flights: flights.data.flights.length,
        bookings: bookings.data.bookings.length,
        revenue: totalRevenue,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 pt-24 sm:pt-28 pb-10 sm:pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
          Reports
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            <h3 className="text-gray-500 text-sm sm:text-base">
              Total Users
            </h3>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              {report.users}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            <h3 className="text-gray-500 text-sm sm:text-base">
              Total Flights
            </h3>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              {report.flights}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            <h3 className="text-gray-500 text-sm sm:text-base">
              Total Bookings
            </h3>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              {report.bookings}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
            <h3 className="text-gray-500 text-sm sm:text-base">
              Total Revenue
            </h3>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-green-600 break-words">
              ₹{report.revenue}
            </h2>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Reports;