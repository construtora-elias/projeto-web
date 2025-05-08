import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function HeroCarousel({ imagens }) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        centeredSlides={true}
        slidesPerView={2.8}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {imagens.map((img, index) => (
          <SwiperSlide
          key={index}
          style={{ width: '300px', height: '400px' }}
          className="overflow-hidden shadow-xl rounded-xl" // ← aqui está a borda arredondada
        >
          <img
            src={img.url}
            alt={img.descricao || `Imagem ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
