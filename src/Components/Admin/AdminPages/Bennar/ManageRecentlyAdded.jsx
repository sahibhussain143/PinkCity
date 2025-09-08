import React, { useEffect, useState } from "react";

function ManageRecentlyAdded() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [imageSource, setImageSource] = useState("file"); // 'file' or 'url'

  // Load events from localStorage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  // Save events to localStorage
  const saveToLocalStorage = (updatedEvents) => {
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
  };

  // Delete handlers
  const handleDelete = (id) => {
    setDeletingId(id);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    const updatedEvents = events.filter((event) => event.id !== deletingId);
    saveToLocalStorage(updatedEvents);
    setShowDeletePopup(false);
    setDeletingId(null);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
    setDeletingId(null);
  };

  // Edit handlers
  const handleEdit = (event) => {
    setEditingEvent({ ...event });
    setImageSource(event.image ? "file" : "url");
    setShowEditPopup(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setEditingEvent((prev) => ({ ...prev, image: [reader.result], imageUrl: "" }));
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    const updatedEvents = events.map((event) =>
      event.id === editingEvent.id ? { ...editingEvent } : event
    );
    saveToLocalStorage(updatedEvents);
    setShowEditPopup(false);
    setEditingEvent(null);
  };

  // Toggle active status
  const toggleActive = (id) => {
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        const updatedEvent = { ...event, isActive: !event.isActive };
        setPopupMessage(updatedEvent.isActive ? "Product Activated" : "Product Deactivated");
        return updatedEvent;
      }
      return event;
    });
    saveToLocalStorage(updatedEvents);
    // Show message temporarily
    setTimeout(() => setPopupMessage(""), 2000);
  };

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">
        Manage Recently Added Products
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto shadow-md rounded-lg bg-white max-w-[calc(100vw-250px)]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-pink-600 text-white text-left text-sm md:text-base">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Price</th>
              <th className="p-3">Description</th>
              <th className="p-3">Category</th>
              <th className="p-3">Location</th>
              <th className="p-3">Active</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b text-sm md:text-base hover:bg-gray-50">
                <td className="p-3">
                  {(event.image?.[0] || event.imageUrl) && (
                    <img
                      src={event.image?.[0] || event.imageUrl}
                      alt={event.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                </td>
                <td className="p-3">{event.title}</td>
                <td className="p-3">{event.price}</td>
                <td className="p-3 max-w-xs truncate">{event.description}</td>
                <td className="p-3">{event.category}</td>
                <td className="p-3">{event.location}</td>
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={event.isActive || false}
                    onChange={() => toggleActive(event.id)}
                  />
                </td>
                <td className="p-3 text-gray-500 text-xs">{event.date}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(event)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2"
          >
            <div className="flex items-center gap-4">
              {(event.image?.[0] || event.imageUrl) && (
                <img
                  src={event.image?.[0] || event.imageUrl}
                  alt={event.title}
                  className="w-20 h-20 object-cover rounded"
                />
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.category}</p>
                <p className="text-sm text-gray-500">{event.location}</p>
              </div>
              <input
                type="checkbox"
                checked={event.isActive || false}
                onChange={() => toggleActive(event.id)}
                className="self-start mt-1"
              />
            </div>
            <p className="text-sm text-gray-700 truncate">{event.description}</p>
            <p className="text-sm font-medium text-pink-600">Price: {event.price}</p>
            <p className="text-xs text-gray-400">{event.date}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(event)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm flex-1"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(event.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm flex-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {showEditPopup && editingEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative">
            <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-xl"
              onClick={() => setShowEditPopup(false)}
            >
              ×
            </button>

            {(editingEvent.image?.[0] || editingEvent.imageUrl) && (
              <img
                src={editingEvent.image?.[0] || editingEvent.imageUrl}
                alt="Preview"
                className="w-32 h-32 object-cover rounded mb-4"
              />
            )}

            {/* Image Source */}
            <div className="mb-2">
              <label className="block mb-1 font-medium">Image Source:</label>
              <select
                value={imageSource}
                onChange={(e) => setImageSource(e.target.value)}
                className="border rounded px-2 py-1 w-full mb-2"
              >
                <option value="file">Upload File</option>
                <option value="url">Image URL</option>
              </select>

              {imageSource === "file" ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mb-2 w-full"
                />
              ) : (
                <input
                  type="text"
                  placeholder="Enter image URL"
                  value={editingEvent.imageUrl || ""}
                  onChange={(e) =>
                    setEditingEvent((prev) => ({ ...prev, imageUrl: e.target.value, image: null }))
                  }
                  className="border rounded px-2 py-1 mb-2 w-full"
                />
              )}
            </div>

            {/* Other Fields */}
            <input
              type="text"
              placeholder="Title"
              value={editingEvent.title || ""}
              onChange={(e) => setEditingEvent((prev) => ({ ...prev, title: e.target.value }))}
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Price"
              value={editingEvent.price || ""}
              onChange={(e) => setEditingEvent((prev) => ({ ...prev, price: e.target.value }))}
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <textarea
              placeholder="Description"
              value={editingEvent.description || ""}
              onChange={(e) =>
                setEditingEvent((prev) => ({ ...prev, description: e.target.value }))
              }
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Category"
              value={editingEvent.category || ""}
              onChange={(e) => setEditingEvent((prev) => ({ ...prev, category: e.target.value }))}
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Location"
              value={editingEvent.location || ""}
              onChange={(e) => setEditingEvent((prev) => ({ ...prev, location: e.target.value }))}
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <label className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={editingEvent.isActive || false}
                onChange={() => setEditingEvent((prev) => ({ ...prev, isActive: !prev.isActive }))}
              />
              Active
            </label>
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex-1"
              >
                Save
              </button>
              <button
                onClick={() => setShowEditPopup(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete / Status Popup */}
      {(showDeletePopup || popupMessage) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center">
            {popupMessage ? (
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{popupMessage}</h3>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete this product? This action cannot be undone.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleCancelDelete}
                    className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmDelete}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
                  >
                    Confirm
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageRecentlyAdded;
