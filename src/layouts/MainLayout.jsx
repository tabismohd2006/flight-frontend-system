import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      {/* Fixed Navbar ke liye top padding */}
      <main className="pt-16 sm:pt-20 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;