import React from "react";
import { useEffect } from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const Dashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("ticketapp_session");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Total Tickets
              </h3>
              <p className="text-3xl font-bold text-blue-600">0</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Open Tickets
              </h3>
              <p className="text-3xl font-bold text-green-600">0</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex-1">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Resolved Tickets
              </h3>
              <p className="text-3xl font-bold text-gray-600">0</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Quick Actions
            </h3>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Go to Ticket Management
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Account
            </h3>
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
              onClick={() => {
                localStorage.removeItem("ticketapp_session");
                window.location.href = "/login";
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
