import React from "react";
import { HeartPulse, Stethoscope, Ambulance, Microscope, Baby, Activity } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Cardiology",
      icon: <HeartPulse className="w-10 h-10 text-green-700" />,
      description:
        "Advanced cardiac care with modern diagnostics, surgical expertise, and 24/7 emergency support.",
    },
    {
      title: "General Medicine",
      icon: <Stethoscope className="w-10 h-10 text-green-700" />,
      description:
        "Comprehensive health checkups, consultations, and treatments for a wide range of medical conditions.",
    },
    {
      title: "Emergency Care",
      icon: <Ambulance className="w-10 h-10 text-green-700" />,
      description:
        "Round-the-clock emergency and trauma care unit with immediate response and dedicated medical teams.",
    },
    {
      title: "Pathology & Labs",
      icon: <Microscope className="w-10 h-10 text-green-700" />,
      description:
        "Fully equipped laboratory offering accurate and fast diagnostic testing and medical imaging services.",
    },
    {
      title: "Maternity & Child Care",
      icon: <Baby className="w-10 h-10 text-green-700" />,
      description:
        "Expert gynecologists, pediatricians, and neonatal care units to ensure safe motherhood and healthy babies.",
    },
    {
      title: "Physiotherapy",
      icon: <Activity className="w-10 h-10 text-green-700" />,
      description:
        "Personalized rehabilitation programs and physiotherapy treatments for faster and safer recovery.",
    },
  ];

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Services</h2>
        <p className="text-green-700 max-w-2xl mx-auto mb-12">
          Vitals360 offers a wide range of healthcare services designed to meet patient needs with compassion and precision.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-green-700"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{service.title}</h3>
              <p className="text-green-700 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
