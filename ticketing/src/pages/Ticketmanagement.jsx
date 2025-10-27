import React, { useState, useEffect } from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const TicketManagement = () => {
  const [tickets, setTickets] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [formErrors, setFormErrors] = useState({});
  const [editingTicket, setEditingTicket] = useState(null);

  function validateForm() {
    const errors = {};

    if (!newTicket.title.trim()) {
      errors.title = "Title is required";
    }

    if (!newTicket.status) {
      errors.status = "select a status";
    }

    return errors; // Added missing return
  }

  function handleCreateTicket() {
    const errors = validateForm(); // Fixed function name

    if (Object.keys(errors).length === 0) {
      const ticket = {
        id: Date.now(), // Added ()
        ...newTicket,
        createdAt: new Date().toISOString(), // Added ()
      };
      setTickets([...tickets, ticket]);

      setNewTicket({
        title: "",
        description: "",
        status: "open",
      });
      setShowCreateForm(false);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  }

  const handleDeleteTicket = (ticketId) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter((ticket) => ticket.id !== ticketId));
    }
  };

  const handleUpdateTicket = () => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === editingTicket.id ? editingTicket : ticket
      )
    );
    setEditingTicket(null);
  };

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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Ticket Management</h1>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              onClick={() => {
                setShowCreateForm(true);
              }}
            >
              Create New Ticket
            </button>
          </div>

          {/* Create Ticket Form */}
          {showCreateForm && (
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={newTicket.title}
                  onChange={(e) => {
                    setNewTicket({ ...newTicket, title: e.target.value });
                  }}
                  className="border w-full border-gray-300 rounded-md px-3 mt-1 py-2 block"
                  placeholder="Enter ticket title"
                />
                {formErrors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.title}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={newTicket.description}
                  onChange={(e) => {
                    setNewTicket({
                      ...newTicket,
                      description: e.target.value,
                    });
                  }}
                  className="border border-gray-300 w-full mt-1 px-3 py-2 block rounded-md"
                  placeholder="Enter ticket description"
                  rows="3"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={newTicket.status}
                  onChange={(e) =>
                    setNewTicket({ ...newTicket, status: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
                {formErrors.status && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.status}
                  </p>
                )}
              </div>

              <div className="flex mt-4 gap-4">
                <button
                  onClick={handleCreateTicket}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Create Ticket
                </button>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Edit Ticket Form */}
          {editingTicket && (
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Edit Ticket</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    value={editingTicket.title}
                    onChange={(e) => {
                      setEditingTicket({
                        ...editingTicket,
                        title: e.target.value,
                      });
                    }}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={editingTicket.description}
                    onChange={(e) =>
                      setEditingTicket({
                        ...editingTicket,
                        description: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    value={editingTicket.status}
                    onChange={(e) =>
                      setEditingTicket({
                        ...editingTicket,
                        status: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleUpdateTicket}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    Update Ticket
                  </button>
                  <button
                    onClick={() => setEditingTicket(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tickets List */}
          <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-bold mb-4">
              All Tickets ({tickets.length})
            </h2>

            {tickets.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No tickets yet. Create your first ticket!
              </p>
            ) : (
              tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-semibold">{ticket.title}</h3>
                  <p className="text-gray-600 mt-2">{ticket.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        ticket.status === "open"
                          ? "bg-green-100 text-green-800"
                          : ticket.status === "in_progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {ticket.status}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingTicket(ticket)}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTicket(ticket.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TicketManagement;
