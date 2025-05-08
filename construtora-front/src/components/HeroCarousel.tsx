import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function HeroCarousel({ imagens }) {
  return (
    <div className="w-full mt-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {imagens.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[300px] rounded-2x1 overflow-hidden shadow-lg">
              <img
                src={img.url}
                alt={img.descricao || `Imagem ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


