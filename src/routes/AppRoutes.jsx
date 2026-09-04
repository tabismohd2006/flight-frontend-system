import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/public/Home";
import Flights from "../pages/public/Flights";
import FlightDetails from "../pages/public/FlightDetails";
import Booking from "../pages/public/Booking";
import MyBookings from "../pages/user/MyBookings";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import NotFound from "../pages/public/NotFound";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AddFlight from "../pages/admin/AddFlight";
import ManageFlights from "../pages/admin/ManageFlights";
import EditFlight from "../pages/admin/EditFlight";
import ManageBookings from "../pages/admin/ManageBookings";
import ManageUsers from "../pages/admin/ManageUsers";
import Profile from "../pages/user/Profile";
import OffersPage from "../pages/public/OffersPage";
import Reports from "../pages/admin/Reports";


function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flight/:id" element={<FlightDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />

      
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

<Route path="/offers" element={<OffersPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
     <Route
  path="/admin/dashboard"
  element={<AdminDashboard />}
/>
<Route path="/admin/add-flight" element={<AddFlight />} />
<Route path="/admin/flights" element={<ManageFlights />} />
<Route path="/admin/edit-flight/:id" element={<EditFlight />} />
<Route path="/admin/bookings" element={<ManageBookings />} />
<Route path="/admin/users" element={<ManageUsers />} />
<Route path="/profile" element={<Profile />} />
<Route
path="/admin/reports"
element={<Reports/>}
/>
     
    </Routes>
    
  );
}

export default AppRoutes;