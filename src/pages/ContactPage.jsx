import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-white text-gray-800 py-16 min-h-screen mt-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you with
            appointments, queries, or medical advice.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-green-50 rounded-2xl shadow-md p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-green-900 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-6">
              Reach out to us for appointments, inquiries, or feedback.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-green-800 font-medium">📍 Address</h4>
                <p className="text-gray-600">
                  Vitals360 Hospital, Sector 21, New Delhi, India
                </p>
              </div>

              <div>
                <h4 className="text-green-800 font-medium">📞 Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              <div>
                <h4 className="text-green-800 font-medium">📧 Email</h4>
                <p className="text-gray-600">info@vitals360hospital.com</p>
              </div>
            </div>

            {/* Optional Google Map Embed */}
            <div className="mt-8">
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5024367803226!2d77.2253323753243!3d28.6139398812059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc0f8b9e6f87%3A0xe7a5c44c4cbec8d1!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1694874800000!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl border-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-green-50 rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-green-900 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-green-900 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-green-900 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-green-900 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-green-900 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-600 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactPage;
