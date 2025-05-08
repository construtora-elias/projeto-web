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
        slidesPerView={2.8} // mostra 2.5 slides (ajuste conforme necessário)
        spaceBetween={20}  // espaçamento entre slides

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

        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {imagens.map((img, index) => (
          <SwiperSlide
            key={index}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={img.url}
              alt={img.descricao || `Imagem ${index + 1}`}
              className="w-full h-full object-cover"
            />

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


