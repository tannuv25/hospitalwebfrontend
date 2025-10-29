import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Edit2, LogOut, CalendarDays, Mail, Phone, User } from "lucide-react";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!user?.token) {
      Swal.fire("Unauthorized", "Please login to view your profile", "warning");
      return;
    }
    fetchProfile();
    fetchAppointments();
  }, [user]);

  // ✅ Fetch Profile
  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:8000/users/profile", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setProfileData(res.data.user);
    } catch (error) {
      console.error("Profile fetch error:", error);
      Swal.fire("Error", "Unable to load profile details", "error");
    }
  };

  // ✅ Fetch Appointments (optional)
  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:8000/appointments/all", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setAppointments(res.data.appointments || []);
    } catch (error) {
      console.error("Appointments fetch error:", error);
    }
  };

  if (!profileData) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-green-50">
        <p className="text-gray-600 text-lg">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 flex flex-col items-center mt-10">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={
                profileData?.avatar ||
                "https://cdn-icons-png.flaticon.com/512/847/847969.png"
              }
              alt="User Avatar"
              className="w-20 h-20 rounded-full border-2 border-green-500"
            />
            <div>
              <h2 className="text-2xl font-bold text-green-700">{profileData.name}</h2>
              <p className="text-gray-600">{profileData.email}</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() =>
                Swal.fire("Coming soon!", "Edit profile feature under development", "info")
              }
              className="flex items-center gap-2 border border-green-600 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-all"
            >
              <Edit2 size={16} /> Edit
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="flex items-center gap-3">
            <User className="text-green-600" size={20} />
            <span>
              <strong className="text-green-700">Full Name:</strong> {profileData.name}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-green-600" size={20} />
            <span>
              <strong className="text-green-700">Email:</strong> {profileData.email}
            </span>
          </div>
          {profileData.phone && (
            <div className="flex items-center gap-3">
              <Phone className="text-green-600" size={20} />
              <span>
                <strong className="text-green-700">Phone:</strong> {profileData.phone}
              </span>
            </div>
          )}
        </div>

        {/* Appointment Summary */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
            <CalendarDays size={22} /> My Appointments
          </h3>

          {appointments.length === 0 ? (
            <p className="text-gray-500 mt-3">No appointments booked yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {appointments.map((appt) => (
                <div
                  key={appt._id}
                  className="p-4 bg-green-50 border border-green-100 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-green-700">{appt.doctorName}</p>
                  <p className="text-sm text-gray-600">{appt.department}</p>
                  <p className="text-sm mt-1">
                    <span className="font-semibold">Date:</span> {appt.date}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Time:</span> {appt.time}
                  </p>
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      appt.status === "cancelled"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {appt.status?.toUpperCase() || "BOOKED"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
