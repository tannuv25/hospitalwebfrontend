// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-3">🌿 Vitals360</h2>
          <p className="text-sm text-green-100 leading-relaxed">
            At Vitals360, we provide compassionate and professional healthcare
            services with advanced facilities and experienced doctors.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-green-100">
            <li>
              <Link to="/" className="hover:text-green-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-green-300 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-green-300 transition">
                Doctors
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-green-100">
            <li className="flex items-center gap-2">
              <Phone size={16} />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              support@vitals360.com
            </li>
            <li>123 Green Avenue, Delhi, India</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-green-300 transition"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="hover:text-green-300 transition"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="hover:text-green-300 transition"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-700 mt-10"></div>

      {/* Copyright */}
      <div className="text-center text-sm text-green-100 mt-4">
        © {new Date().getFullYear()} Vitals360. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
