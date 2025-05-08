import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function HeroCarousel({ imagens }) {
  // Define o máximo de slides por view (ex: no desktop)
  const maxSlidesPerView = 2; // ajuste conforme desejado

  // Calcula quantos slides realmente pode exibir sem vazio
  const slidesToShow = Math.min(imagens.length, maxSlidesPerView);

  // Só ativa loop se tiver imagens suficientes
  const shouldLoop = imagens.length > slidesToShow;

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        centeredSlides={true}
        slidesPerView={slidesToShow}
        spaceBetween={20}
        loop={shouldLoop}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {imagens.map((img, index) => (
          <SwiperSlide
            key={index}
            style={{ width: '300px', height: '400px' }}
            className="overflow-hidden shadow-xl rounded-xl"
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
