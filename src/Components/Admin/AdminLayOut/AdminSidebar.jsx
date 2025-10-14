// AdminSidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPlusCircle,
  FaClipboard,
  FaCalendarCheck,
  FaChartLine,
  FaCube,
  FaMoon,
} from 'react-icons/fa';
import { SiFacebookgaming } from 'react-icons/si';
import { FaArrowTrendDown, FaUserGroup, FaArrowRightFromBracket, FaLitecoinSign, FaGear } from 'react-icons/fa6';

const AdminSidebar = ({ adminProfile }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex sticky top-16 h-screen overflow-x-fixed overflow-y-auto">
      {/* Sidebar */}
      <div
        className={`transition-width duration-500 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-xl`}
      >
        {/* Toggle button */}
        <div className="p-4 border-b flex justify-end">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes className="h-6 w-6 " /> : <FaBars className=" mr-4 h-6 w-6" />}
          </button>
        </div>

        {/* Logo and Profile info */}
        <div className="p-4 flex items-center">
          <img
            src={adminProfile.image}
            alt="Admin"
            className="w-10 h-10 rounded-full object-cover"
          />
          {isSidebarOpen && <span className="ml-2 font-bold text-pink-600">{adminProfile.name}</span>}
        </div>

        {/* Navigation */}
        <nav className="p-2 space-y-1 text-gray-700">
          <Link to="/admin/dashboard" className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 ${!isSidebarOpen && 'justify-center'}`}>
            <FaHome className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Dashboard</span>}
          </Link>
          <div className="group relative">
            <div className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 cursor-pointer ${!isSidebarOpen && 'justify-center'}`}>
              <FaUserGroup className="h-5 w-5" />
              {isSidebarOpen && (
                <div className="ml-3 flex items-center justify-between w-full">
                  <span>Customers</span>
                  <FaChevronDown className="ml-2 group-hover:rotate-180 transition-transform duration-300" />
                </div>
              )}
            </div>
            {isSidebarOpen && (
              <ul className="pl-6 pt-1 space-y-1 hidden group-hover:block">
                <li><Link to="/admin/RegisteredCustomer" className="flex items-center p-2 hover:bg-blue-100 hover:text-pink-600 rounded"><FaLitecoinSign className="mr-1" /> Registered Customer List</Link></li>
                <li><Link to="/admin/EnquiryList" className="flex items-center p-2 hover:bg-blue-100 hover:text-pink-600 rounded"><FaClipboard className="mr-1" />Enquiry List</Link></li>
                <li><Link to="/admin/AddCustomer" className="flex items-center p-2 hover:bg-blue-100 hover:text-pink-600 rounded"><FaPlusCircle className="mr-1" /> AddCustomer</Link></li>
              </ul>
            )}
          </div>
          <div className="group relative">
            <div className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 cursor-pointer ${!isSidebarOpen && 'justify-center'}`}>
              <FaArrowTrendDown className="h-5 w-5" />
              {isSidebarOpen && (
                <div className="ml-3 flex items-center justify-between w-full">
                  <span>Benner</span>
                  <FaChevronDown className="ml-2 group-hover:rotate-180 transition-transform duration-300" />
                </div>
              )}
            </div>
            {isSidebarOpen && (
              <ul className="pl-6 pt-1 space-y-1 hidden group-hover:block">
                <li><Link to="/admin/addbennar" className="flex items-center p-2 hover:bg-blue-100 hover:text-pink-600 rounded"><FaPlusCircle className="mr-1" /> Add Benner</Link></li>
                <li><Link to="/admin/bennarlist" className="flex items-center p-2 hover:bg-blue-100 hover:text-pink-600 rounded"><FaClipboard className="mr-1" /> Benner List</Link></li>
                <li><Link to="/admin/ManageRecentlyAdded" className="flex items-center p-2 hover:bg-blue-100 hover:text-pink-600 rounded"><FaClipboard className="mr-1" /> Manage Recently Added</Link></li>
              </ul>
            )}
          </div>
          <Link to="/admin/bookings" className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 ${!isSidebarOpen && 'justify-center'}`}>
            <SiFacebookgaming className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Bookings</span>}
          </Link>
          <Link to="/admin/mediamanager" className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 ${!isSidebarOpen && 'justify-center'}`}>
            <FaCube className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Media Manager</span>}
          </Link>
          <Link to="/admin/schedules" className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 ${!isSidebarOpen && 'justify-center'}`}>
            <FaCalendarCheck className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Schedules</span>}
          </Link>
          <Link to="/admin/statistics" className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 ${!isSidebarOpen && 'justify-center'}`}>
            <FaChartLine className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Statistics</span>}
          </Link>
          <Link to="/admin/logout" className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 ${!isSidebarOpen && 'justify-center'}`}>
            <FaArrowRightFromBracket className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">LogOut</span>}
          </Link>
            <Link to="/admin/settings" className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 ${!isSidebarOpen && 'justify-center'}`}>
            <FaGear className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Settings</span>}
          </Link>
          <h2 className={`flex items-center p-3 rounded-lg hover:bg-blue-100 hover:text-pink-600 ${!isSidebarOpen && 'justify-center'}`}>
            <FaMoon className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3"></span>}
          </h2>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;