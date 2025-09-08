import React, { useState } from 'react';

// The popup form component for editing the admin profile
const AdminEditForm = ({ initialName, initialImage, onClose, onSave }) => {
  const [name, setName] = useState(initialName);
  const [previewImage, setPreviewImage] = useState(initialImage);

  // Handles a file being selected and creates a local URL for preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handles saving the changes and calling the parent's update function
  const handleSave = () => {
    // Call the parent's onSave function with the new profile data
    onSave({ name, image: previewImage });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full mx-4 sm:mx-0">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Edit Profile</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border outline-none border-pink-300 rounded-md shadow-sm p-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Image</label>
            <div className="mt-1 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <label
                htmlFor="file-upload"
                className="ml-5 bg-pink-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-pink-600 transition-colors"
              >
                Choose File
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors font-semibold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

// The success popup component
const ProfileUpdatedPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full mx-4 sm:mx-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 h-12 w-12 mx-auto mb-4">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.458-1.492 3.041 2.96 7.042-7.009 1.458 1.49-8.5 8.418z"/>
        </svg>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
        <p className="text-gray-700 mb-6">Your profile has been updated.</p>
        <button
          onClick={onClose}
          className="w-full px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors font-semibold"
        >
          OK
        </button>
      </div>
    </div>
  );
};

// The main AdminHeader component
const AdminHeader = ({ adminProfile, onProfileUpdate }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  // A new function to handle the update and then show the success popup
  const handleSaveAndNotify = (newProfileData) => {
    onProfileUpdate(newProfileData);
    setIsFormOpen(false); // Close the edit form
    setIsSuccessPopupOpen(true); // Open the success popup
  };

  return (
    <>
      <header className="bg-white text-gray-800 sticky top-0 z-[100] p-4 max-w-full shadow-md rounded-b-xl flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="text-xl flex font-bold text-gray-900">
            <img
              src="/images/pinkcity-icon.png"
              alt="Pink City Logo"
              className="h-8 w-8"
            />
            <h2 className="pl-4 text-pink-500">Pink City</h2>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div onClick={() => setIsFormOpen(true)} aria-label="Open profile edit form" className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-inner cursor-pointer">
            <img
              src={adminProfile.image}
              alt="Admin Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs md:text-sm text-gray-600 font-medium">
              Welcome,
            </span>
            <h2 className="text-sm md:text-lg font-semibold text-pink-600">
              {adminProfile.name}
            </h2>
          </div>
        </div>
      </header>

      {isFormOpen && (
        <AdminEditForm
          initialName={adminProfile.name}
          initialImage={adminProfile.image}
          onClose={() => setIsFormOpen(false)}
          // Pass the new handler to the form
          onSave={handleSaveAndNotify}
        />
      )}

      {isSuccessPopupOpen && (
        <ProfileUpdatedPopup onClose={() => setIsSuccessPopupOpen(false)} />
      )}
    </>
  );
};

export default AdminHeader;
