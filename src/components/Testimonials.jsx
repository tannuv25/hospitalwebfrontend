import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Patient - Cardiology",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "The staff at Vitals360 were extremely caring and professional. The doctors explained every step of my treatment with patience. I’m truly grateful for their excellent care.",
    },
    {
      name: "Priya Sharma",
      role: "Patient - Maternity",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      feedback:
        "Vitals360 made my maternity journey smooth and safe. The doctors and nurses were always available and reassuring. Highly recommended for expecting mothers!",
    },
    {
      name: "Arjun Patel",
      role: "Patient - Orthopedics",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      feedback:
        "After my surgery, the physiotherapy team helped me recover quickly. The hospital’s cleanliness and service quality were outstanding.",
    },
    {
      name: "Sneha Kapoor",
      role: "Patient - Dermatology",
      image: "https://randomuser.me/api/portraits/women/62.jpg",
      feedback:
        "I visited Vitals360 for a skin treatment, and the dermatologist was incredibly knowledgeable. The results exceeded my expectations. Highly satisfied with the service!",
    },
    {
      name: "Vikram Singh",
      role: "Patient - Emergency Care",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      feedback:
        "The emergency response team at Vitals360 saved my life. Their immediate attention and advanced facilities ensured I got the best possible treatment on time.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          What Our Patients Say
        </h2>
        <p className="text-green-700 max-w-2xl mx-auto mb-10">
          Hear from our patients who experienced compassionate care and successful recovery at Vitals360.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex items-stretch">
              <div className="bg-green-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center w-full h-full min-h-[350px]">
                <div>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-green-700 mx-auto"
                  />
                  <p className="text-green-700 italic mb-4">“{t.feedback}”</p>
                </div>
                <div>
                  <h3 className="text-green-800 font-semibold">{t.name}</h3>
                  <p className="text-green-600 text-sm">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
