import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CalendarDays, Search, MoreHorizontal } from "lucide-react";
import { useAuth } from "../context/Authcontext";
import EditAppointmentModal from "../components/EditAppointmentModal";

// ─── Appointment Modal ──────────────────────────────
const AppointmentModal = ({ appointment, onClose }) => {
  if (!appointment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-md mx-4 relative transform transition-all duration-300 scale-100 hover:scale-[1.01]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-green-700 text-xl font-bold"
        >
          ✕
        </button>

        <div className="p-6 text-center">
          <div className="flex flex-col items-center">
            <img
              src={
                appointment?.doctorImage ||
                "https://cdn-icons-png.flaticon.com/512/847/847969.png"
              }
              alt={appointment.doctorName}
              className="w-28 h-28 object-cover rounded-full border-4 border-green-100 shadow-md"
            />
            <h2 className="text-2xl font-bold text-green-800 mt-3">
              {appointment.doctorName}
            </h2>
            <p className="text-green-700 font-medium">
              {appointment.department}
            </p>
          </div>

          <div className="mt-5 text-gray-700 text-left space-y-2">
            <p>
              <span className="font-semibold text-green-700">Date:</span>{" "}
              {appointment.date}
            </p>
            <p>
              <span className="font-semibold text-green-700">Time:</span>{" "}
              {appointment.time}
            </p>
            <p>
              <span className="font-semibold text-green-700">Status:</span>{" "}
              <span
                className={`font-semibold ${
                  appointment.status === "cancelled"
                    ? "text-red-600"
                    : appointment.status === "pending"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {appointment.status?.toUpperCase()}
              </span>
            </p>

            {appointment?.notes && (
              <p>
                <span className="font-semibold text-green-700">Notes:</span>{" "}
                {appointment.notes}
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={onClose}
              className="border border-green-700 text-green-700 px-5 py-2 rounded-full hover:bg-green-50 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── All Appointments Page ───────────────────────────
const AllAppointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [editAppointment, setEditAppointment] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const menuRefs = useRef([]);

  useEffect(() => {
    if (user?.token) fetchAppointments();
  }, [user]);

  // ✅ Detect clicks outside specific menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openMenuIndex !== null &&
        menuRefs.current[openMenuIndex] &&
        !menuRefs.current[openMenuIndex].contains(event.target)
      ) {
        setOpenMenuIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuIndex]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:8000/appointments/all", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setAppointments(res.data.appointments || []);
      setFiltered(res.data.appointments || []);
    } catch (error) {
      console.error("Appointments fetch error:", error);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const results = appointments.filter(
      (a) =>
        a.doctorName.toLowerCase().includes(term) ||
        a.department?.toLowerCase().includes(term) ||
        a.status?.toLowerCase().includes(term)
    );
    setFiltered(results);
  };

  const handleMenuClick = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleView = (appt) => {
    setSelectedAppointment(appt);
    setOpenMenuIndex(null);
  };

  const handleEdit = (appt) => {
    setEditAppointment(appt);
    setOpenMenuIndex(null);
  };

  const handleUpdate = () => {
    fetchAppointments();
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 via-green-100/60 to-green-50 py-10 px-4 flex flex-col items-center mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-green-100"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <CalendarDays className="text-green-600" /> All Appointments
          </h2>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-green-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Search
              size={18}
              className="absolute left-3 top-2.5 text-green-600"
            />
          </div>
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No appointments found.</p>
        ) : (
          <div className="overflow-x-auto relative">
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-green-100/70 text-gray-700">
                  <th className="text-left py-3 px-4 rounded-tl-lg">Doctor</th>
                  <th className="text-left py-3 px-4">Department</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Time</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-right py-3 px-4 rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((appt, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-green-50 hover:bg-green-50/80 transition"
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {appt.doctorName}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {appt.department}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{appt.date}</td>
                    <td className="py-3 px-4 text-gray-600">{appt.time}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        appt.status === "cancelled"
                          ? "text-red-600"
                          : appt.status === "pending"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {appt.status?.toUpperCase()}
                    </td>

                    {/* 3-dot menu */}
                    <td
                      className="py-3 px-4 text-right relative"
                      ref={(el) => (menuRefs.current[idx] = el)}
                    >
                      <button
                        onClick={() => handleMenuClick(idx)}
                        className="p-2 rounded-full hover:bg-green-100 transition cursor-pointer"
                      >
                        <MoreHorizontal size={20} className="text-green-700" />
                      </button>

                      {openMenuIndex === idx && (
                        <div className="absolute right-4 mt-2 w-32 bg-white border border-green-100 shadow-md rounded-lg z-10 cursor-pointer">
                          <button
                            onClick={() => handleView(appt)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 cursor-pointer"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleEdit(appt)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 cursor-pointer"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* View Modal */}
      {selectedAppointment && (
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />
      )}

      {/* Edit Modal */}
      {editAppointment && (
        <EditAppointmentModal
          appointment={editAppointment}
          onClose={() => setEditAppointment(null)}
          onUpdate={handleUpdate}
          token={user.token}
        />
      )}
    </div>
  );
};

export default AllAppointments;
