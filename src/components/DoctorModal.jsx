// src/components/DoctorModal.jsx
import { Link } from "react-router-dom";

const DoctorModal = ({ doctor, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-md mx-4 relative transform transition-all duration-300 scale-100 hover:scale-[1.01]"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-green-700 text-xl font-bold"
        >
          ✕
        </button>

        <div className="p-6 text-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-green-100 shadow-md"
          />

          <h2 className="text-2xl font-bold text-green-800 mt-4">
            {doctor.name}
          </h2>
          <p className="text-green-700 font-medium">{doctor.specialty}</p>
          <p className="text-gray-500 text-sm mt-1">{doctor.experience}</p>

          <div className="mt-4 text-gray-600 text-sm leading-relaxed">
            {doctor.about}
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/appointment"
              className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
            >
              Book Appointment
            </Link>
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

export default DoctorModal;
