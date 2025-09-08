import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa6";

// Modal Component for confirmation
const ConfirmModal = ({ customer, action, onConfirm, onCancel }) => {
  if (!customer) return null;

  const isBlocking = action === "block";
  const isDeleting = action === "delete";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm text-center">
        <h3 className="text-xl text-pink-500 font-bold mb-4">
          {isDeleting ? "Confirm Delete" : `Confirm ${isBlocking ? "Block" : "Unblock"}`}
        </h3>
        <p className="mb-6">
          {isDeleting
            ? `Are you sure you want to delete `
            : `Are you sure you want to ${isBlocking ? "block" : "unblock"} `}
          <span className="font-semibold text-pink-500">{customer.name}</span>?
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded text-white ${
              isDeleting ? "bg-red-500 hover:bg-red-600" : isBlocking ? "bg-red-500 hover:bg-red-600" : "bg-green-800 hover:bg-green-900"
            }`}
          >
            {isDeleting ? "Delete" : isBlocking ? "Block" : "Unblock"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function RegisteredCustomer() {
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("registeredCustomers");
    return savedCustomers ? JSON.parse(savedCustomers) : [];
  });

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [actionType, setActionType] = useState(null);

  useEffect(() => {
    localStorage.setItem("registeredCustomers", JSON.stringify(customers));
  }, [customers]);

  const handleActionClick = (customer, action) => {
    setSelectedCustomer(customer);
    setActionType(action);
  };

  const confirmAction = () => {
    if (!selectedCustomer) return;

    if (actionType === "block") {
      setCustomers(customers.map(c => c.id === selectedCustomer.id ? { ...c, blocked: true } : c));
    } else if (actionType === "unblock") {
      setCustomers(customers.map(c => c.id === selectedCustomer.id ? { ...c, blocked: false } : c));
    } else if (actionType === "delete") {
      setCustomers(customers.filter(c => c.id !== selectedCustomer.id));
    }

    setSelectedCustomer(null);
    setActionType(null);
  };

  const cancelAction = () => {
    setSelectedCustomer(null);
    setActionType(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-pink-600 text-center">Registered Customers</h2>

      {customers.length === 0 ? (
        <p className="text-center">No customers registered yet.</p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto shadow-md rounded-lg bg-white">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-pink-500 text-white">
                <tr>
                  <th className="p-2 border">Id</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Mobile</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">City</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(c => (
                  <tr key={c.id} className={`border-b ${c.blocked ? "bg-gray-200 text-gray-500" : "hover:bg-gray-50"}`}>
                    <td className="border p-2 text-center">{c.id}</td>
                    <td className="border p-2">{c.name}</td>
                    <td className="border p-2 text-center font-bold text-pink-600">{c.mobile}</td>
                    <td className="border p-2 text-center">{c.email}</td>
                    <td className="border p-2 text-center">{c.city}</td>
                    <td className="border p-2 text-center">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${c.blocked ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"}`}>
                        {c.blocked ? "Blocked" : "Active"}
                      </span>
                    </td>
                    <td className="border p-2 text-center flex gap-2 justify-center">
                      {c.blocked ? (
                        <button
                          onClick={() => handleActionClick(c, "unblock")}
                          className="px-1 text-sm rounded-xl transition bg-green-600 text-white hover:bg-green-800"
                        >
                          Unblock
                        </button>
                      ) : (
                        <button
                          onClick={() => handleActionClick(c, "block")}
                          className="px-2 rounded-xl transition bg-red-500 text-white hover:bg-red-600"
                        >
                          Block
                        </button>
                      )}
                      <button
                        onClick={() => handleActionClick(c, "delete")}
                        className="px-3 py-1 rounded transition text-gray-900 hover:text-red-600"
                        title="Delete Customer"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {customers.map(c => (
              <div key={c.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{c.name}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${c.blocked ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"}`}>
                    {c.blocked ? "Blocked" : "Active"}
                  </span>
                </div>
                <p><span className="font-semibold">Id:</span> {c.id}</p>
                <p><span className="font-semibold">Mobile:</span> <span className="text-pink-600 font-bold">{c.mobile}</span></p>
                <p><span className="font-semibold">Email:</span> {c.email}</p>
                <p><span className="font-semibold">City:</span> {c.city}</p>
                <div className="flex gap-2 mt-2">
                  {c.blocked ? (
                    <button
                      onClick={() => handleActionClick(c, "unblock")}
                      className="px-2 rounded-xl transition bg-green-600 text-white hover:bg-green-800 flex-1"
                    >
                      Unblock
                    </button>
                  ) : (
                    <button
                      onClick={() => handleActionClick(c, "block")}
                      className="px-2 rounded-xl transition bg-red-500 text-white hover:bg-red-600 flex-1"
                    >
                      Block
                    </button>
                  )}
                  <button
                    onClick={() => handleActionClick(c, "delete")}
                    className="px-3 py-1 rounded transition text-gray-900 hover:text-red-600 flex-1"
                    title="Delete Customer"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedCustomer && (
        <ConfirmModal
          customer={selectedCustomer}
          action={actionType}
          onConfirm={confirmAction}
          onCancel={cancelAction}
        />
      )}
    </div>
  );
}
