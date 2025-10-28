import React, { useState } from "react";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dermatology",
    "Gynecology",
    "ENT",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Appointment booked successfully!");
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-900 mb-3">
            Book an Appointment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your consultation with our expert doctors. We ensure
            personalized care and convenience for every patient.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-green-50 border border-green-100 rounded-2xl shadow-md p-8 space-y-6"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-green-900 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-700 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-green-900 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-700 outline-none"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-green-900 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-700 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-green-900 font-semibold mb-2">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-700 outline-none"
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-green-900 font-semibold mb-2">
                Doctor’s Name
              </label>
              <input
                type="text"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                placeholder="Enter doctor's name"
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-700 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-green-900 font-semibold mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-700 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-green-900 font-semibold mb-2">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-700 outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-green-900 font-semibold mb-2">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Share any specific health concern or request..."
              className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-700 outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-700 text-white font-semibold px-10 py-3 rounded-lg hover:bg-green-800 transition shadow-md"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
