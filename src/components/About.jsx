import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white text-green-800 py-16 mt-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Vitals360</h2>
          <p className="text-green-700 leading-relaxed mb-4">
            Vitals360 is a multi-specialty hospital dedicated to excellence in healthcare.  
            We combine advanced medical technology with a compassionate team of professionals
            to deliver patient-centered care that’s efficient, ethical, and effective.
          </p>
          <p className="text-green-700 leading-relaxed">
            From emergency response to specialized surgeries and post-treatment care,
            our focus is always on improving patient well-being and building trust that lasts a lifetime.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200"
            alt="Vitals360 Hospital"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-10">
        <div className="bg-green-50 p-8 rounded-2xl shadow-md border-l-4 border-green-700">
          <h3 className="text-2xl font-semibold mb-3 text-green-800">Our Mission</h3>
          <p className="text-green-700">
            To deliver compassionate and quality healthcare using innovative technology
            and a patient-first approach.
          </p>
        </div>

        <div className="bg-green-50 p-8 rounded-2xl shadow-md border-l-4 border-green-700">
          <h3 className="text-2xl font-semibold mb-3 text-green-800">Our Vision</h3>
          <p className="text-green-700">
            To be a leader in the healthcare sector known for trust, transparency, and innovation —
            ensuring every patient receives care beyond expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
