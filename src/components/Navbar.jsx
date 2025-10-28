// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-800 hover:text-green-700 transition"
        >
          🌿 Vitals360 
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-green-900 hover:text-green-700 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-green-900 hover:text-green-700 font-medium transition"
          >
            Services
          </Link>
          <Link
            to="/doctors"
            className="text-green-900 hover:text-green-700 font-medium transition"
          >
            Doctors
          </Link>
          <Link
            to="/about"
            className="text-green-900 hover:text-green-700 font-medium transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-green-900 hover:text-green-700 font-medium transition"
          >
            Contact
          </Link>
          <Link
            to="/appointment"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Book Appointment
          </Link>

           <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="border border-green-600 text-green-700 px-4 py-2 rounded-full text-center font-medium hover:bg-green-50 transition"
          >
            Login / Signup
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-800"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-50 border-t border-green-200">
          <div className="flex flex-col px-6 py-3 space-y-3">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-green-900 hover:text-green-700"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="text-green-900 hover:text-green-700"
            >
              Services
            </Link>
            <Link
              to="/doctors"
              onClick={() => setMenuOpen(false)}
              className="text-green-900 hover:text-green-700"
            >
              Doctors
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-green-900 hover:text-green-700"
            >
              Contact
            </Link>
            <Link
              to="/appointment"
              onClick={() => setMenuOpen(false)}
              className="bg-green-700 text-white text-center px-4 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
