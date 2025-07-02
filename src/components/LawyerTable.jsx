import axios from "axios";
import React, { useState, useEffect } from "react";

const LawyerTable = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchMyCases = async () => {
    if (!token) {
      console.warn("No token found. Redirecting...");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5002/api/cases/my-cases", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCases(res.data);
    } catch (error) {
      console.error("Error fetching lawyer's cases:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyCases();
  }, []);

  return (
    <div className="overflow-x-auto m-8">
      <h2 className="text-xl font-bold mb-4">My Assigned Cases</h2>

      {loading ? (
        <p>Loading cases...</p>
      ) : cases.length === 0 ? (
        <p>No cases assigned to you yet.</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Case ID</th>
              <th className="p-3 text-left">Client Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem) => (
              <tr key={caseItem._id} className="border-b">
                <td className="p-3">{caseItem._id}</td>
                <td className="p-3">{caseItem.name}</td>
                <td className="p-3">{caseItem.email}</td>
                <td className="p-3">{caseItem.phone}</td>
                <td className="p-3">{caseItem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LawyerTable;
