import React from "react";

const AppointmentModal = ({ appointment, onClose }) => {
  if (!appointment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-md mx-4 relative transform transition-all duration-300 scale-100 hover:scale-[1.01]"
        onClick={(e) => e.stopPropagation()} // prevent close on inner click
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-green-700 text-xl font-bold"
        >
          ✕
        </button>

        <div className="p-6 text-center">
          {/* Doctor Info */}
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

          {/* Appointment Info */}
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

          {/* Buttons */}
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

export default AppointmentModal;
