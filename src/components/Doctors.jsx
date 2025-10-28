// src/components/Doctors.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import doctors from "../data/doctors";
import DoctorModal from "./DoctorModal";

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <section className="py-12 bg-green-50" id="doctors">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-800">Our Doctors</h2>
        <p className="text-gray-600 mt-2">
          Meet our highly qualified and experienced medical professionals.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="px-6"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {doctors.map((doc) => (
            <SwiperSlide key={doc.id}>
              <div
                onClick={() => setSelectedDoctor(doc)}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-green-800">{doc.name}</h3>
                  <p className="text-green-700 text-sm">{doc.specialty}</p>
                  <p className="text-gray-500 text-xs mt-2">{doc.experience}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedDoctor && (
        <DoctorModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
      )}
    </section>
  );
};

export default Doctors;
