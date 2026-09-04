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

        axios.get(
          "http://localhost:5000/api/auth/users",
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        ),

        axios.get(
          "http://localhost:5000/api/flights"
        ),

        axios.get(
          "http://localhost:5000/api/bookings/all",
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        )

      ]);

      const totalRevenue =
        bookings.data.bookings.reduce(

          (sum,b)=>

            sum + b.totalAmount,

          0

        );

      setReport({

        users:users.data.users.length,

        flights:flights.data.flights.length,

        bookings:bookings.data.bookings.length,

        revenue:totalRevenue,

      });

    } catch(error){

      console.log(error);

    }

  };
  return (

<section className="min-h-screen bg-slate-100 pt-28 pb-16">

<div className="max-w-7xl mx-auto px-4">

<h1 className="text-4xl font-bold mb-10">

Reports

</h1>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-3xl shadow-xl p-8">

<h3>Total Users</h3>

<h2 className="text-4xl font-bold mt-3">

{report.users}

</h2>

</div>

<div className="bg-white rounded-3xl shadow-xl p-8">

<h3>Total Flights</h3>

<h2 className="text-4xl font-bold mt-3">

{report.flights}

</h2>

</div>

<div className="bg-white rounded-3xl shadow-xl p-8">

<h3>Total Bookings</h3>

<h2 className="text-4xl font-bold mt-3">

{report.bookings}

</h2>

</div>

<div className="bg-white rounded-3xl shadow-xl p-8">

<h3>Total Revenue</h3>

<h2 className="text-4xl font-bold mt-3 text-green-600">

₹{report.revenue}

</h2>

</div>

</div>

</div>

</section>

);

}

export default Reports;