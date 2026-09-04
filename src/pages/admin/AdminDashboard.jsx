import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Plane,
  PlusCircle,
  List,
  Users,
  BookOpen,
} from "lucide-react";

function AdminDashboard() {
  const [stats, setStats] = useState({
  users: 0,
  flights: 0,
  bookings: 0,
});

useEffect(() => {
  getDashboardData();
}, []);

const getDashboardData = async () => {
  try {

    const token = localStorage.getItem("token");

    const [users, flights, bookings] = await Promise.all([

      axios.get("http://localhost:5000/api/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

      axios.get("http://localhost:5000/api/flights"),

      axios.get(
        "http://localhost:5000/api/bookings/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),

    ]);

    setStats({
      users: users.data.users.length,
      flights: flights.data.flights.length,
      bookings: bookings.data.bookings.length,
    });

  } catch (error) {

    console.log(error);

  }
};
  const cards = [
    {
      title: "Add Flight",
      icon: <PlusCircle size={40} />,
      color: "bg-blue-600",
      path: "/admin/add-flight",
    },
    {
      title: "Manage Flights",
      icon: <Plane size={40} />,
      color: "bg-green-600",
      path: "/admin/flights",
    },
    {
      title: "Manage Bookings",
      icon: <BookOpen size={40} />,
      color: "bg-orange-600",
      path: "/admin/bookings",
    },
    {
      title: "Manage Users",
      icon: <Users size={40} />,
      color: "bg-purple-600",
      path: "/admin/users",
    },
    {
      title: "Reports",
      icon: <List size={40} />,
      color: "bg-red-600",
      path: "/admin/reports",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold mb-2">
          Admin Dashboard
        </h1>

        <p className="text-slate-600 mb-10">
          Manage Flights, Users and Bookings
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">

  <div className="bg-white rounded-2xl shadow-lg p-6">

    <h3 className="text-slate-500">
      Total Users
    </h3>

    <h2 className="text-4xl font-bold mt-2">
      {stats.users}
    </h2>

  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6">

    <h3 className="text-slate-500">
      Total Flights
    </h3>

    <h2 className="text-4xl font-bold mt-2">
      {stats.flights}
    </h2>

  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6">

    <h3 className="text-slate-500">
      Total Bookings
    </h3>

    <h2 className="text-4xl font-bold mt-2">
      {stats.bookings}
    </h2>

  </div>

</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className={`${card.color} text-white rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-xl`}
            >
              <div className="mb-6">
                {card.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {card.title}
              </h2>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default AdminDashboard;