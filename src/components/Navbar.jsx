// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        {/* ---------- Left Section (Mobile: Menu + Logo) ---------- */}
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-green-800 cursor-pointer"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold text-green-800 hover:text-green-700 transition"
          >
            <img
              src="../../logo/vital360logo2.png"
              alt="Vitals360 Logo"
              className="w-9 h-10"
            />
            <span>Vitals360</span>
          </Link>
        </div>

        {/* ---------- Desktop Menu ---------- */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-green-900 hover:text-green-700 font-medium transition">
            Home
          </Link>
          <Link to="/services" className="text-green-900 hover:text-green-700 font-medium transition">
            Services
          </Link>
          <Link to="/doctors" className="text-green-900 hover:text-green-700 font-medium transition">
            Doctors
          </Link>
          <Link to="/about" className="text-green-900 hover:text-green-700 font-medium transition">
            About Us
          </Link>
          <Link to="/contact" className="text-green-900 hover:text-green-700 font-medium transition">
            Contact
          </Link>
          <Link
            to="/appointment"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Book Appointment
          </Link>

          {/* ---------- Login / Profile ---------- */}
          {!user ? (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="border border-green-600 text-green-700 px-4 py-2 rounded-full text-center font-medium hover:bg-green-50 transition cursor-pointer"
            >
              Login / Signup
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white hover:bg-green-800 transition cursor-pointer"
              >
                <User size={20} />
              </button>

              {/* Desktop Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg">
                  <Link
                    to="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/my-appointments"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Appointments
                  </Link>
                  <Link
                    to="/history"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    History
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ---------- Mobile Right: Login / Profile ---------- */}
        <div className="md:hidden flex items-center space-x-3 relative">
          {!user ? (
            <Link
              to="/login"
              className="text-green-800 border border-green-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-50 transition"
            >
              Login
            </Link>
          ) : (
            <>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-green-700 text-white hover:bg-green-800 transition"
              >
                <User size={18} />
              </button>

              {/* ✅ Mobile Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 top-12 w-44 bg-white border border-gray-200 rounded-md shadow-lg">
                  <Link
                    to="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/my-appointments"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Appointments
                  </Link>
                  <Link
                    to="/history"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    History
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* ---------- Mobile Menu (Main Navigation) ---------- */}
      {menuOpen && (
        <div className="md:hidden bg-green-50 border-t border-green-200">
          <div className="flex flex-col px-6 py-3 space-y-3">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-green-900 hover:text-green-700 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="text-green-900 hover:text-green-700 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="/doctors"
              onClick={() => setMenuOpen(false)}
              className="text-green-900 hover:text-green-700 cursor-pointer"
            >
              Doctors
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-green-900 hover:text-green-700 cursor-pointer"
            >
              Contact
            </Link>
            <Link
              to="/appointment"
              onClick={() => setMenuOpen(false)}
              className="bg-green-700 text-white text-center px-4 py-2 rounded-lg hover:bg-green-800 transition cursor-pointer"
            >
              Book Appointment
            </Link>

            {!user ? (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="border border-green-600 text-green-700 text-center px-4 py-2 rounded-full font-medium hover:bg-green-100 transition cursor-pointer"
              >
                Login / Signup
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium text-center border border-red-400 px-4 py-2 rounded-full hover:bg-red-50 transition cursor-pointer"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
