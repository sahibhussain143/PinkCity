import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

// Define the key for localStorage
const PROFILE_STORAGE_KEY = "adminProfile";

const AdminLayOut = () => {
  // Use a function to initialize state from localStorage
  const getInitialProfile = () => {
    try {
      const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
      // Parse the stored JSON or return a default profile if none exists
      return storedProfile ? JSON.parse(storedProfile) : {
        name: "Admin User",
        image: "https://finetoshine.com/wp-content/uploads/facebook-profile-picture-for-girl-and-profile-pic-fb-female-2.jpg"
      };
    } catch (error) {
      console.error("Failed to retrieve profile from localStorage", error);
      // Return default profile on error
      return {
        name: "Admin User",
        image: "https://finetoshine.com/wp-content/uploads/facebook-profile-picture-for-girl-and-profile-pic-fb-female-2.jpg"
      };
    }
  };

  const [adminProfile, setAdminProfile] = useState(getInitialProfile);

  // Use useEffect to save the profile to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(adminProfile));
  }, [adminProfile]);

  // Function to update the profile state, passed down to AdminHeader
  const handleProfileUpdate = (newProfileData) => {
    setAdminProfile(newProfileData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Pass the profile data and update function to AdminHeader */}
      <AdminHeader adminProfile={adminProfile} onProfileUpdate={handleProfileUpdate} />

      <div className="flex flex-1">
        {/* Pass the profile data to AdminSidebar */}
        <AdminSidebar adminProfile={adminProfile} />

        {/* Page content from routes */}
        <div className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayOut;