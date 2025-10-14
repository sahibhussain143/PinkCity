// import { Routes, Route, Navigate } from 'react-router-dom';
// import AdminLayOut from '../AdminLayOut/AdminLayOut';
// import DashBoard from '../AdminPages/DashBoard/DashBoard';
// import MediaManager from '../AdminPages/MediaManager/MediaManager';
// import Schdules from '../AdminPages/Schedules/Schdules';
// import Customers from '../AdminPages/Customers/Customers';
// import Statistics from '../AdminPages/Statistics/Statistics';
// import Bookings from '../AdminPages/Bookings/Booking';
// import Benner from '../AdminPages/Bennar/Bennar';
// import AddBennar from '../AdminPages/Bennar/AddBennar';
// import BennarList from '../AdminPages/Bennar/BennarList';
// import { Settings } from 'lucide-react';
// import RegisteredCustomer from "../../Admin/AdminPages/Customers/RegisteredCustomer";
// import EnquiryList from '../AdminPages/Customers/EnquiryList';
// import AddCustomer from '../AdminPages/Customers/AddCustomer';
// import ManageRecentlyAdded from '../AdminPages/Bennar/ManageRecentlyAdded';

// const AdminRouter = () => {
//   return (
//     <Routes>
//       <Route element={<AdminLayOut />}>
//         <Route path="dashboard" element={<DashBoard />} />
//         <Route path="mediamanager" element={<MediaManager />} />
//         <Route path="schedules" element={<Schdules />} />
//         <Route path="customers" element={<Customers />} />
//         <Route path="settings" element={<Settings />} />

//         <Route path="statistics" element={<Statistics />} />
//         <Route path="bookings" element={<Bookings />} />
//         <Route path="benner" element={<Benner />} />
//         <Route path="addbennar" element={<AddBennar />} />
//         <Route path="bennarlist" element={<BennarList />} />
//         <Route path="ManageRecentlyAdded" element={<ManageRecentlyAdded />} />
//         <Route path="RegisteredCustomer" element={<RegisteredCustomer />} />
//         <Route path="enquirylist" element={<EnquiryList />} />
//         <Route path="AddCustomer" element={<AddCustomer />} />

//         <Route path="" element={<Navigate to="dashboard" />} />
//       </Route>
//     </Routes>
//   );
// };

// export default AdminRouter;




import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayOut from "../AdminLayOut/AdminLayOut";
import DashBoard from "../AdminPages/DashBoard/DashBoard";
import MediaManager from "../AdminPages/MediaManager/MediaManager";
import Schdules from "../AdminPages/Schedules/Schdules";
import Customers from "../AdminPages/Customers/Customers";
import Statistics from "../AdminPages/Statistics/Statistics";
import Bookings from "../AdminPages/Bookings/Booking";
import Benner from "../AdminPages/Bennar/Bennar";
import AddBennar from "../AdminPages/Bennar/AddBennar";
import BennarList from "../AdminPages/Bennar/BennarList";
import { Settings } from "lucide-react";
import RegisteredCustomer from "../AdminPages/Customers/RegisteredCustomer";
import EnquiryList from "../AdminPages/Customers/EnquiryList";
import AddCustomer from "../AdminPages/Customers/AddCustomer";
import ManageRecentlyAdded from "../AdminPages/Bennar/ManageRecentlyAdded";
import AdminProtectedRoute from "../AdminRouter/AdminProtectedRoute.jsx";
import LogOut from "../AdminPages/logout/LogOut";

const AdminRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <AdminProtectedRoute>
            <AdminLayOut />
          </AdminProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="mediamanager" element={<MediaManager />} />
        <Route path="schedules" element={<Schdules />} />
        <Route path="customers" element={<Customers />} />
        <Route path="settings" element={<Settings />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="benner" element={<Benner />} />
        <Route path="addbennar" element={<AddBennar />} />
        <Route path="bennarlist" element={<BennarList />} />
        <Route path="ManageRecentlyAdded" element={<ManageRecentlyAdded />} />
        <Route path="RegisteredCustomer" element={<RegisteredCustomer />} />
        <Route path="enquirylist" element={<EnquiryList />} />
        <Route path="AddCustomer" element={<AddCustomer />} />
        <Route path="logout" element={<LogOut />} /> {/* ✅ Logout Route */}
        <Route path="" element={<Navigate to="dashboard" />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
