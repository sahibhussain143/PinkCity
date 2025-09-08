import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";

// --- Message Modal ---
const MessageModal = ({ enquiry, message, onMessageChange, onClose, onSend }) => {
  if (!enquiry) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Send Message To</h3>
        <div className="mb-4 p-3 bg-gray-100 rounded">
          <p className="font-semibold">{enquiry.name}</p>
          <p className="text-sm text-gray-600">{enquiry.email}</p>
        </div>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          rows="4"
          placeholder="Type your message here..."
          value={message}
          onChange={onMessageChange}
        />
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={onSend}
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Success Modal ---
const SuccessModal = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-xl text-center w-full max-w-sm">
      <div className="text-green-500 mb-4">
        <svg
          className="w-16 h-16 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2">Success!</h3>
      <p className="text-gray-700 mb-6">{message}</p>
      <button
        onClick={onClose}
        className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
      >
        OK
      </button>
    </div>
  </div>
);

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [currentEnquiry, setCurrentEnquiry] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Only load data from localStorage initially
  useEffect(() => {
    const savedEnquiries = JSON.parse(localStorage.getItem("enquiries")) || [];
    const enquiriesWithId = savedEnquiries.map((e, idx) => ({ ...e, id: idx + 1 }));
    setEnquiries(enquiriesWithId);
  }, []);

  const handleOpenMessageModal = (enquiry) => {
    setCurrentEnquiry(enquiry);
    setMessageText("");
    setIsMessageModalOpen(true);
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    const confirmation = `Message sent to ${currentEnquiry.name}: "${messageText}"`;
    setSuccessMessage(confirmation);
    setIsMessageModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setSuccessMessage("");
  };

  const handleDeleteClick = (enquiry) => {
    setDeleteConfirm(enquiry);
  };

 const confirmDelete = () => {
  const updatedEnquiries = enquiries.filter((e) => e.id !== deleteConfirm.id);
  setEnquiries(updatedEnquiries);
  localStorage.setItem("enquiries", JSON.stringify(updatedEnquiries));
  setDeleteConfirm(null);
};

  const cancelDelete = () => {
    setDeleteConfirm(null);
  };

  return (
    <>


    
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold text-pink-600 mb-6">Customer Enquiries</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 md:table">
            <thead className="bg-pink-500 text-white hidden md:table-header-group sticky top-0">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Destination</th>
                <th className="px-4 py-2 border">Message</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody className="md:table-row-group">
              {enquiries.map((enquiry) => (
                <tr
                  key={enquiry.id}
                  className="border-b md:border-none block md:table-row mb-4 md:mb-0 bg-white rounded-lg shadow md:shadow-none p-4 md:p-0"
                >
                  <td className="px-4 py-2 md:border md:px-2 md:py-1 block md:table-cell font-bold text-center">
                    {enquiry.id}
                  </td>
                  <td className="px-4 py-2 md:border md:px-2 md:py-1 block md:table-cell font-medium text-center">
                    {enquiry.name}
                  </td>
                  <td className="px-4 py-2 md:border md:px-2 md:py-1 block md:table-cell">
                    <a
                      href={`mailto:${enquiry.email}`}
                      className="text-gray-600 hover:text-blue-600 hover:underline font-semibold text-center"
                    >
                      {enquiry.email}
                    </a>
                  </td>
                  <td className="px-4 py-2 md:border md:px-2 md:py-1 block md:table-cell">
                    <a
                      href={`tel:${enquiry.phone}`}
                      className="text-gray-600 hover:text-blue-600 hover:underline font-semibold text-center"
                    >
                      {enquiry.phone}
                    </a>
                  </td>
                  <td className="px-4 py-2 md:border md:px-2 md:py-1 block md:table-cell text-center">
                    {enquiry.destination}
                  </td>
                  <td className="px-4 py-2 md:border md:px-2 md:py-1 block md:table-cell">{enquiry.message}</td>
                  <td className="px-4 py-2 md:border md:px-2 md:py-1 block  md:table-cell  justify-between ">
                    <button
                      onClick={() => handleOpenMessageModal(enquiry)}
                      className="w-full md:w-auto bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition mt-2 md:mt-0"
                    >
                      Send Message
                    </button>
                    <button
                      onClick={() => handleDeleteClick(enquiry)}
                      className="w-full md:w-auto hover:text-red-600 right-0 text-gray-900 px-3 py-1 rounded transition mt-2 md:mt-0"
                    >
                      <FaTrash className="right-0 justify-between" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isMessageModalOpen && (
        <MessageModal
          enquiry={currentEnquiry}
          message={messageText}
          onMessageChange={(e) => setMessageText(e.target.value)}
          onClose={() => setIsMessageModalOpen(false)}
          onSend={handleSendMessage}
        />
      )}

      {isSuccessModalOpen && (
        <SuccessModal message={successMessage} onClose={handleCloseSuccessModal} />
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm text-center">
            <h3 className="text-xl text-pink-500 font-bold mb-4">Confirm Delete</h3>
            <p className="mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-pink-500">{deleteConfirm.name}</span>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryList;
