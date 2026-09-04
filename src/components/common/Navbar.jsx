import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isLoggedIn = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Flights", path: "/flights" },
  { name: "Offers", path: "/offers" },

  ...(isLoggedIn
    ? [
        { name: "My Bookings", path: "/my-bookings" },
        { name: "Profile", path: "/profile" },
      ]
    : []),

  ...(user?.role === "admin"
    ? [
        {
          name: "Dashboard",
          path: "/admin/dashboard",
        },
      ]
    : []),

  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <Plane
              className="text-blue-600"
              size={32}
            />

            <h1 className="text-2xl font-bold text-blue-700">
              SkyBook
            </h1>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>

            ))}

          </nav>

          {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-4">

  {isLoggedIn ? (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/";
      }}
      className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
    >
      Logout
    </button>
  ) : (
    <>
      <Link
        to="/login"
        className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Register
      </Link>
    </>
  )}

</div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
          >
            <Menu size={30} />
          </button>

        </div>
      </header>

      {/* ================================================= */}

      {/* 👇👇 PART-2 IS LINE KE NICHE START HOGA 👇👇 */}
            <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}

            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-80 max-w-[85%] h-screen bg-white shadow-2xl z-50 lg:hidden"
            >
              {/* Header */}

              <div className="flex items-center justify-between p-5 border-b">

                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Plane className="text-blue-600" size={28} />

                  <h2 className="text-xl font-bold text-blue-700">
                    SkyBook
                  </h2>
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <X size={28} />
                </button>

              </div>

              {/* Mobile Links */}

              <div className="flex flex-col px-6 py-6 gap-3">

                {navLinks.map((item) => (

                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                ))}

              </div>

              {/* Bottom Buttons */}

              <div className="absolute bottom-8 left-6 right-6 flex flex-col gap-3">

             {isLoggedIn ? (
  <button
    onClick={() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
    }}
    className="text-center py-3 rounded-lg bg-red-600 text-white"
  >
    Logout
  </button>
) : (
  <>
    <Link
      to="/login"
      onClick={() => setIsOpen(false)}
      className="text-center py-3 rounded-lg border border-blue-600 text-blue-600"
    >
      Login
    </Link>

    <Link
      to="/register"
      onClick={() => setIsOpen(false)}
      className="text-center py-3 rounded-lg bg-blue-600 text-white"
    >
      Register
    </Link>
  </>
)}

              </div>

            </motion.div>

          </>
        )}
      </AnimatePresence>

    </>
  );
}

export default Navbar;