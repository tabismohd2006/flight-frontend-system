import { useEffect, useState } from "react";
import axios from "axios";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/auth/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="min-h-screen bg-slate-100 pt-24 sm:pt-28 pb-10 sm:pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          Manage Users
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-8">

          <input
            type="text"
            placeholder="Search User..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 w-full lg:w-96"
          />

          <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center">
            Total Users : {filteredUsers.length}
          </div>

        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <div className="overflow-x-auto">

            <table className="min-w-[700px] w-full">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Role</th>
                </tr>

              </thead>

              <tbody>

                {filteredUsers.length === 0 ? (

                  <tr>

                    <td
                      colSpan="4"
                      className="py-10 text-lg text-center"
                    >
                      No Users Found
                    </td>

                  </tr>

                ) : (

                  filteredUsers.map((user) => (

                    <tr
                      key={user._id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4 whitespace-nowrap font-medium">
                        {user.name}
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        {user.email}
                      </td>

                      <td className="p-4 whitespace-nowrap">
                        {user.phone || "-"}
                      </td>

                      <td className="p-4 whitespace-nowrap capitalize">

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            user.role === "admin"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {user.role}
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

export default ManageUsers;