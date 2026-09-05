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
      icon: <PlusCircle size={36} />,
      color: "bg-blue-600",
      path: "/admin/add-flight",
    },
    {
      title: "Manage Flights",
      icon: <Plane size={36} />,
      color: "bg-green-600",
      path: "/admin/flights",
    },
    {
      title: "Manage Bookings",
      icon: <BookOpen size={36} />,
      color: "bg-orange-600",
      path: "/admin/bookings",
    },
    {
      title: "Manage Users",
      icon: <Users size={36} />,
      color: "bg-purple-600",
      path: "/admin/users",
    },
    {
      title: "Reports",
      icon: <List size={36} />,
      color: "bg-red-600",
      path: "/admin/reports",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-100 pt-24 sm:pt-28 pb-10 sm:pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl sm:text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-slate-600 mt-2 mb-8 sm:mb-10">
          Manage Flights, Users and Bookings
        </p>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-slate-500 text-sm sm:text-base">
              Total Users
            </h3>

            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              {stats.users}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-slate-500 text-sm sm:text-base">
              Total Flights
            </h3>

            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              {stats.flights}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-slate-500 text-sm sm:text-base">
              Total Bookings
            </h3>

            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              {stats.bookings}
            </h2>
          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className={`${card.color} text-white rounded-3xl p-6 sm:p-8 hover:scale-105 transition duration-300 shadow-xl`}
            >
              <div className="mb-5">
                {card.icon}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold">
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