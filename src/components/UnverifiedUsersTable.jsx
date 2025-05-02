import React, { useEffect, useState } from "react";
import axios from "axios";

const UnverifiedUsersTable = () => {
  const [users, setUsers] = useState([]);

  const fetchUnverifiedUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5002/api/auth/unverified", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching unverified users:", error);
    }
  };

  const handleVerify = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5002/api/auth/verify/${userId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchUnverifiedUsers(); // Refresh after verification
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  useEffect(() => {
    fetchUnverifiedUsers();
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Unverified Users</h2>
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="text-center">
              <td className="p-3 border">{user.name}</td>
              <td className="p-3 border">{user.email}</td>
              <td className="p-3 border capitalize">{user.role}</td>
              <td className="p-3 border">
                <button
                  onClick={() => handleVerify(user._id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Verify
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="4" className="p-4 text-gray-500">
                No unverified users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UnverifiedUsersTable;
