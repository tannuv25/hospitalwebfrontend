import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HospitalCarousel = () => {
  // Dummy hospital images (replace with your real ones)
  const images = [
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200",
    "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=1200",
    "https://images.unsplash.com/photo-1576765607924-bde870cf9b6d?q=80&w=1200",
    "https://images.unsplash.com/photo-1580281658629-7b28c4f8f3c7?q=80&w=1200",
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">
          Our Hospital in Glimpse
        </h2>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          effect="fade"
          loop
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Hospital ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HospitalCarousel;
