import HeroCarousel from "../components/HeroCarousel";
import EmpreendimentoCard from "../components/EmpreendimentoCard";
import Footer from "../components/Footer";
import { ProjetoDto } from "../interfaces";
import { mockProjetos } from "../api/MockData";

export default function Home() {
  const empreendimentos: ProjetoDto[] = mockProjetos.slice(0, 4);
  const lancamentos: ProjetoDto[] = mockProjetos.slice(4, 8);

  const imagens = [
    { url: '/imagens/foto1.jpg.jpeg', descricao: 'Casa Duplex' },
    { url: '/imagens/foto2.jpg.jpeg', descricao: 'Ui' },
    { url: '/imagens/foto3.jpg.jpeg', descricao: 'Ui' },
    { url: '/imagens/foto4.jpg.jpeg', descricao: 'Ui' },
    
    
  ];


  return (
    <>
      <main className="mx-auto p-0 max-w-6xl ">
        {/* HERO CAROUSEL */}
        <HeroCarousel imagens={imagens} />

        {/* ENCONTRE SEU EMPREENDIMENTO */}
        <h1 className="text-4xl font-bold mb-8 text-center mt-10">
          Encontre seu empreendimento
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {empreendimentos.map((item) => (
            <EmpreendimentoCard key={`empre-${item.id}`} projetoItem={item} />
          ))}
        </div>

        {/* LANÇAMENTOS COM FUNDO COLORIDO */}
        <div className="bg-purple-100 py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Lançamentos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {lancamentos.map((item) => (
              <EmpreendimentoCard key={`lanca-${item.id}`} projetoItem={item} />
            ))}
          </div>
        </div>

        {/* CHAMADA COM FUNDO ROXO */}
        <div className=" bg-purple-700 text-white py-12 text-center ">
          <h3 className="text-2xl font-bold mb-4 ">Pronto para encontrar o lar dos seus sonhos?</h3>
          <p className="mb-6 max-w-xl mx-auto">
            Entre em contato conosco e descubra ofertas exclusivas para você. Nossos consultores estão prontos para ajudar!
          </p>
          <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition">
            Fale com a gente
          </button>
        </div>
      </main>

      {/* FOOTER FORA DO MAIN */}
      <Footer />
    </>
  );
}

  

