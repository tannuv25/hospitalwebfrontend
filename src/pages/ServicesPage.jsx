import Navbar from "../components/Navbar";
import ServicesSection from "../components/Services";
import DoctorSection from "../components/Doctors";
import Footer from "../components/Footer";

function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <ServicesSection />
                <DoctorSection />
                {/* Health Insurance & Packages Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h3 className="text-3xl font-semibold text-green-900 mb-4">
                            Health Insurance & Packages
                        </h3>
                        <p className="text-green-700 max-w-2xl mx-auto mb-12">
                            We partner with top insurance providers and offer affordable health checkup packages for you and your family.
                        </p>

                        {/* Insurance Partners */}
                        {/* <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                            {[
                                { name: "Star Health", logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Star_Health_and_Allied_Insurance_Company_Logo.png" },
                                { name: "HDFC ERGO", logo: "https://upload.wikimedia.org/wikipedia/en/9/99/HDFC_ERGO_Logo.png" },
                                { name: "ICICI Lombard", logo: "https://upload.wikimedia.org/wikipedia/en/5/55/ICICI_Lombard_logo.svg" },
                                { name: "Max Bupa", logo: "https://upload.wikimedia.org/wikipedia/en/4/42/Niva_Bupa_Health_Insurance_logo.png" },
                            ].map((ins, i) => (
                                <div
                                    key={i}
                                    className="bg-green-50 border border-green-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                                >
                                    <img
                                        src={ins.logo}
                                        alt={ins.name}
                                        className="w-24 h-12 object-contain mx-auto mb-3"
                                    />
                                    <p className="text-green-800 font-medium">{ins.name}</p>
                                </div>
                            ))}
                        </div> */}

                        {/* Health Packages */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                {
                                    title: "Basic Health Checkup",
                                    price: "₹1,499",
                                    features: [
                                        "Blood Pressure & Sugar Test",
                                        "Complete Blood Count (CBC)",
                                        "ECG & Chest X-Ray",
                                    ],
                                },
                                {
                                    title: "Executive Health Package",
                                    price: "₹3,999",
                                    features: [
                                        "Full Body Checkup",
                                        "Thyroid, Lipid & Liver Profile",
                                        "Doctor Consultation",
                                    ],
                                },
                                {
                                    title: "Senior Citizen Care Plan",
                                    price: "₹2,999",
                                    features: [
                                        "Heart, Kidney & Diabetes Tests",
                                        "Bone Density Screening",
                                        "Dietary Consultation",
                                    ],
                                },
                            ].map((pkg, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-green-100 p-8 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300"
                                >
                                    <h4 className="text-xl font-semibold text-green-800 mb-2">
                                        {pkg.title}
                                    </h4>
                                    <p className="text-green-600 text-lg font-medium mb-4">{pkg.price}</p>
                                    <ul className="text-green-700 text-sm mb-4 space-y-1">
                                        {pkg.features.map((f, i) => (
                                            <li key={i}>• {f}</li>
                                        ))}
                                    </ul>
                                    <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
                                        Book Package
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}

export default ServicesPage;
