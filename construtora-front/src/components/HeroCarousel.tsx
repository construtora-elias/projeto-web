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
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
  <Swiper
    modules={[Autoplay, Pagination]}
    centeredSlides={true}
    slidesPerView={1.5}
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
  >
    {imagens.map((img, index) => (
      <SwiperSlide
        key={index}
        style={{ minWidth: '300px', height: '400px' }}
        className="shadow-xl rounded-xl overflow-hidden"
      >
        <img
          src={img.url}
          alt={img.descricao || `Imagem ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}
