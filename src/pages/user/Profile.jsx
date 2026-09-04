import { useEffect, useState } from "react";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  Shield,
  Calendar,
} from "lucide-react";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please Login First");
        window.location.href = "/login";
        return;
      }

      const res = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("PROFILE RESPONSE:", res.data);

      setUser(res.data.user);
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-red-600">
          User Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-52 flex flex-col justify-center items-center text-white">

            <div className="w-28 h-28 rounded-full bg-white text-blue-700 flex items-center justify-center text-5xl font-bold border-4 border-white shadow-lg">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <h2 className="mt-4 text-3xl font-bold">
              {user.name}
            </h2>

            <p>{user.email}</p>

          </div>

          {/* Body */}

          <div className="p-10 grid md:grid-cols-2 gap-8">

            <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl">
              <User className="text-blue-600" />
              <div>
                <p className="text-slate-500">Full Name</p>
                <h2 className="font-bold text-lg">
                  {user.name}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl">
              <Mail className="text-green-600" />
              <div>
                <p className="text-slate-500">Email</p>
                <h2 className="font-bold">
                  {user.email}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl">
              <Phone className="text-orange-500" />
              <div>
                <p className="text-slate-500">Phone</p>
                <h2 className="font-bold">
                  {user.phone || "Not Added"}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl">
              <Shield className="text-purple-600" />
              <div>
                <p className="text-slate-500">Role</p>

                <span
                  className={`px-4 py-1 rounded-full text-white text-sm ${
                    user.role === "admin"
                      ? "bg-red-600"
                      : "bg-blue-600"
                  }`}
                >
                  {user.role}
                </span>

              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl md:col-span-2">
              <Calendar className="text-pink-600" />

              <div>
                <p className="text-slate-500">
                  Joined On
                </p>

                <h2 className="font-bold">
                  {new Date(user.createdAt).toLocaleDateString("en-IN")}
                </h2>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;