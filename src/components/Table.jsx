import axios from "axios";
import React, { useState, useEffect } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [lawyerInputs, setLawyerInputs] = useState({});
  const token = localStorage.getItem("token");

  const fetchCases = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/cases/getAllcases", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/api/cases/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCases();
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5002/api/cases/update/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, status: newStatus } : user
        )
      );
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const handleLawyerInputChange = (caseId, value) => {
    setLawyerInputs((prev) => ({ ...prev, [caseId]: value }));
  };

  const handleAssignLawyer = async (caseId) => {
    const lawyerName = lawyerInputs[caseId];
    if (!lawyerName) {
      alert("Please enter a lawyer ID");
      return;
    }

    try {
      await axios.put(
        `http://localhost:5002/api/cases/assign/${caseId}`,
        { lawyerName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Lawyer assigned successfully!");
      setLawyerInputs((prev) => ({ ...prev, [caseId]: "" }));
      fetchCases();
    } catch (err) {
      console.error("Error assigning lawyer:", err);
      alert("Failed to assign lawyer.");
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <div className="overflow-x-auto m-8">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-4">Number</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Status</th>
            <th className="p-4">Assign Lawyer</th>
            <th className="p-4">Assigned Lawyer</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b">
              <td className="p-4">{user._id}</td>
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.phone}</td>
              <td className="p-4">
                <select
                  value={user.status}
                  onChange={(e) => handleStatusChange(user._id, e.target.value)}
                  className="border px-2 py-1 rounded text-xs"
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>

              <td className="p-4 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Lawyer ID"
                  value={lawyerInputs[user._id] || ""}
                  onChange={(e) => handleLawyerInputChange(user._id, e.target.value)}
                  className="border px-2 py-1 text-sm rounded"
                />
                <button
                  onClick={() => handleAssignLawyer(user._id,lawyerInputs[user._id])}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Assign
                </button>
              </td>
              <td className="p-4">
          {user.lawyerAssigned
            ? user.lawyerAssigned.name
            : "Not Assigned"}
        </td>
              

              <td className="p-4">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
