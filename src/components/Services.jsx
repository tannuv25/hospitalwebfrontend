import React from "react";
import {
    HeartPulse,
    Stethoscope,
    Ambulance,
    Microscope,
    Baby,
    Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
    const services = [
        {
            title: "Cardiology",
            icon: <HeartPulse className="w-8 h-8 text-green-700" />,
            description:
                "Advanced cardiac care with modern diagnostics, surgical expertise, and 24/7 emergency support.",
        },
        {
            title: "General Medicine",
            icon: <Stethoscope className="w-8 h-8 text-green-700" />,
            description:
                "Comprehensive health checkups, consultations, and treatments for a wide range of medical conditions.",
        },
        {
            title: "Emergency Care",
            icon: <Ambulance className="w-8 h-8 text-green-700" />,
            description:
                "Round-the-clock emergency and trauma care unit with immediate response and dedicated medical teams.",
        },
        {
            title: "Pathology & Labs",
            icon: <Microscope className="w-8 h-8 text-green-700" />,
            description:
                "Fully equipped laboratory offering accurate and fast diagnostic testing and medical imaging services.",
        },
        {
            title: "Maternity & Child Care",
            icon: <Baby className="w-8 h-8 text-green-700" />,
            description:
                "Expert gynecologists, pediatricians, and neonatal care units to ensure safe motherhood and healthy babies.",
        },
        {
            title: "Physiotherapy",
            icon: <Activity className="w-8 h-8 text-green-700" />,
            description:
                "Personalized rehabilitation programs and physiotherapy treatments for faster and safer recovery.",
        },
    ];

    return (
        <section className="relative py-20 bg-linear-to-b from-green-50 via-white to-blue-50 overflow-hidden">
            {/* Decorative gradient circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-40 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40 -z-10"></div>

            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-green-800 mb-4">
                    Our Medical Services
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-14">
                    Explore our wide range of healthcare departments and treatments
                    designed to deliver excellence, compassion, and precision.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-green-100"
                        >
                            <div className="flex justify-center mb-5">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-br from-green-100 to-green-200 shadow-inner">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Why Choose Us Section */}
            <div className="mt-24 bg-linear-to-br from-green-50 to-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-semibold text-green-900 mb-6">
                        Why Choose Vitals360?
                    </h3>
                    <p className="text-green-700 max-w-2xl mx-auto mb-12">
                        We are committed to providing world-class healthcare with compassion, technology, and excellence.
                    </p>

                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
                        {[
                            {
                                icon: "fa-user-md",
                                title: "Expert Doctors",
                                desc: "Our experienced specialists deliver precise and compassionate care across all departments.",
                            },
                            {
                                icon: "fa-hospital",
                                title: "Advanced Facilities",
                                desc: "State-of-the-art equipment, labs, and infrastructure for accurate diagnosis and treatment.",
                            },
                            {
                                icon: "fa-ambulance",
                                title: "24/7 Emergency",
                                desc: "Round-the-clock emergency support with dedicated trauma and critical-care units.",
                            },
                            {
                                icon: "fa-heartbeat",
                                title: "Patient-Centric Care",
                                desc: "Personalized treatment plans focusing on comfort, recovery, and long-term wellness.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-green-100"
                            >
                                <div className="flex justify-center mb-4">
                                    <i className={`fas ${item.icon} text-green-700 text-4xl`}></i>
                                </div>
                                <h4 className="text-green-900 font-semibold text-lg mb-2">{item.title}</h4>
                                <p className="text-green-700 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Book Appointment CTA Section */}
            <section className="relative bg-green-900 text-white py-24 overflow-hidden">
                {/* background overlay image */}
                <img
                    src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200" // you can replace with your hospital image
                    alt="hospital background"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />

                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Take the Next Step Toward Better Health?
                    </h2>
                    <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
                        Schedule your appointment today and experience world-class healthcare
                        with compassion and expertise.
                    </p>

                    <div className="flex justify-center gap-6">
                        <Link to="/appointment"
                            onClick={() => setMenuOpen(false)}
                            className="bg-white text-green-900 font-semibold px-8 py-3 rounded-full shadow hover:scale-105 hover:bg-green-100 transition-all duration-300">
                            Book an Appointment
                        </Link>
                        <Link to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-900 transition-all duration-300">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </section>


    );

};

export default ServicesSection;
