// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from '../Layout/Layout';

// // Public Pages
// import Home from '../../Components/Pages/Home/Home';
// import About from '../Pages/About/About';
// import Packages from '../Pages/Package/Packages';
// import Testmonials from '../Pages/Testmonial/Testmonials';
// import Gellary from '../Pages/Gellary/Gellary';
// import Login from '../Pages/Form/Login';
// import Register from '../Pages/Form/Register';
// import TermsAndCondition from '../Pages/TermsAndConditions/TermsAndCondition';
// import PrivacyPolicy from '../Pages/TermsAndConditions/PrivecyPolicy';
// import TripInquiry from '../Pages/TripInquiry';
// import Cycling from '../Pages/Cycling/Cycling';
// import BookingForm from '../Pages/Booking/BookingForm';
// import ConfirmBooking from '../Pages/Booking/ConfirmBooking';
// import PaymentMode from '../Pages/Booking/PaymentMode';
// import AllPlaces from '../Pages/Home/AllPlaces';
// import TravelInspiration from '../Pages/Home/TravelInspiration';
// import AdminRouter from '../Admin/AdminRouter/AdminRouter';
// import RecentlyAdded from '../Pages/Home/RecentlyAdded';
// import NotFound from '../Pages/NotFound/NotFound';

// // Admin Router

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Routes */}
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/packages" element={<Packages />} />
//           <Route path="/testmonials" element={<Testmonials />} />
//           <Route path="/cycling" element={<Cycling />} />
//           <Route path="/gellary" element={<Gellary />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/termsandcondition" element={<TermsAndCondition />} />
//           <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//           <Route path="/confirmbooking" element={<ConfirmBooking />} />
//         </Route>

//         {/* Standalone public routes (outside Layout) */}
//         <Route path="/bookingform" element={<BookingForm />} />
//                 <Route path="/RecentlyAdded" element={<RecentlyAdded />} />

//         <Route path="/paymentmode" element={<PaymentMode />} />
//         <Route path="/TripInquiry" element={<TripInquiry />} />
//         <Route path="/allplaces" element={<AllPlaces />} />
//         <Route path="/travelinspiration" element={<TravelInspiration />} />

//         {/* Admin Routes */}
//         <Route path="/admin/*" element={<AdminRouter />} />
//                 <Route path="*" element={<NotFound />} />


//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";

// Public Pages
import Home from "../../Components/Pages/Home/Home";
import About from "../Pages/About/About";
import Packages from "../Pages/Package/Packages";
import Testmonials from "../Pages/Testmonial/Testmonials";
import Gellary from "../Pages/Gellary/Gellary";
import Login from "../Pages/Form/Login";
import Register from "../Pages/Form/Register";
import TermsAndCondition from "../Pages/TermsAndConditions/TermsAndCondition";
import PrivacyPolicy from "../Pages/TermsAndConditions/PrivecyPolicy";
import TripInquiry from "../Pages/TripInquiry";
import Cycling from "../Pages/Cycling/Cycling";
import BookingForm from "../Pages/Booking/BookingForm";
import ConfirmBooking from "../Pages/Booking/ConfirmBooking";
import PaymentMode from "../Pages/Booking/PaymentMode";
import AllPlaces from "../Pages/Home/AllPlaces";
import TravelInspiration from "../Pages/Home/TravelInspiration";
// ✅ IMPORT THE AUTHENTICATION COMPONENT
import AdminAuthComponent from "../Admin/AdminRouter/AdminAuthComponent"; 
import RecentlyAdded from "../Pages/Home/RecentlyAdded";
import NotFound from "../Pages/NotFound/NotFound";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/testmonials" element={<Testmonials />} />
          <Route path="/cycling" element={<Cycling />} />
          <Route path="/gellary" element={<Gellary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/termsandcondition" element={<TermsAndCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/confirmbooking" element={<ConfirmBooking />} />
        </Route>

        {/* Standalone routes (no common Layout) */}
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/recentlyadded" element={<RecentlyAdded />} />
        <Route path="/paymentmode" element={<PaymentMode />} />
        <Route path="/tripinquiry" element={<TripInquiry />} />
        <Route path="/allplaces" element={<AllPlaces />} />
        <Route path="/travelinspiration" element={<TravelInspiration />} />

        {/* ✅ Admin Routes: Protected by the AdminAuthComponent */}
        {/* Any path starting with /admin (e.g., /admin, /admin/dashboard) will hit this component first. */}
        <Route path="/admin/*" element={<AdminAuthComponent />} /> 

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;