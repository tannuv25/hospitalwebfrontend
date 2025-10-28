import Navbar from "../components/Navbar";
import ServicesSection from "../components/Services";
import Footer from "../components/Footer";

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-green-800 text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Medical Services</h1>
          <p className="max-w-2xl mx-auto text-green-100">
            Explore the wide range of treatments and departments that make Vitals360 a trusted healthcare destination.
          </p>
        </section>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}

export default ServicesPage;
