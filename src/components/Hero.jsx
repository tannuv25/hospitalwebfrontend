import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white text-green-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 leading-tight">
            Your Health, Our <span className="text-green-700">Priority</span>
          </h1>
          <p className="text-green-700 text-lg mb-8 leading-relaxed">
            Welcome to <span className="font-semibold text-green-800">Vitals360</span>, 
            where expert doctors and advanced technology come together to provide 
            quality healthcare you can trust — 24/7.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/appointment"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-medium"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white transition font-medium"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
            alt="Healthcare illustration"
            className="w-80 md:w-96 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
