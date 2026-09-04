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

    user.name
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    user.email
      .toLowerCase()
      .includes(search.toLowerCase())

  );

});

  return (

    <section className="min-h-screen bg-slate-100 pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold mb-8">

          Manage Users

        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

  <input
    type="text"
    placeholder="Search User..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border rounded-xl px-4 py-3 w-full md:w-96"
  />

  <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">

    Total Users : {filteredUsers.length}

  </div>

</div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="p-4">Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>

              </tr>

            </thead>

           <tbody>

  {filteredUsers.length === 0 ? (

    <tr>

      <td
        colSpan="4"
        className="py-10 text-xl text-center"
      >
        No Users Found
      </td>

    </tr>

  ) : (

    filteredUsers.map((user) => (

      <tr
        key={user._id}
        className="border-b text-center"
      >

        <td className="p-4">
          {user.name}
        </td>

        <td>
          {user.email}
        </td>

        <td>
          {user.phone || "-"}
        </td>

        <td className="capitalize">
          {user.role}
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

export default ManageUsers;