import { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import EmpreendimentoCard from "../components/EmpreendimentoCard";
import Footer from "../components/Footer";
import { ProjetoDto } from "../interfaces";
import { mockProjetos } from "../api/MockData";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const empreendimentos: ProjetoDto[] = mockProjetos.slice(0, 4);
  const lancamentos: ProjetoDto[] = mockProjetos.slice(4, 8);

  const imagens = [
    { url: '/imagens/foto1.jpeg', descricao: 'Casa Duplex' },
    { url: '/imagens/foto2.jpeg', descricao: 'Ui' },
    { url: '/imagens/foto3.jpeg', descricao: 'Ui' },
    { url: '/imagens/foto4.jpeg', descricao: 'Ui' },
  ];

  return (
    <>
      <main className="mx-auto p-0 max-w-6xl ">
        {/* HERO CAROUSEL */}
        <HeroCarousel imagens={imagens} />

       {/* ENCONTRE SEU EMPREENDIMENTO */}
        <section id="empreendimentos">
          <h1 className="text-4xl font-bold mb-8 text-center mt-10">
            Encontre seu empreendimento
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {empreendimentos.map((item) => (
              <EmpreendimentoCard key={`empre-${item.id}`} projetoItem={item} />
            ))}
          </div>
        </section>


        {/* LANÇAMENTOS */}
        <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-purple-100 py-12">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-900">Lançamentos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {lancamentos.map((item) => (
                <EmpreendimentoCard key={`lanca-${item.id}`} projetoItem={item} />
              ))}
            </div>
          </div>
        </section>

        {/* CHAMADA COM FUNDO ROXO */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-purple-700 text-white py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para encontrar o lar dos seus sonhos?
          </h3>
          <p className="mb-6 max-w-xl mx-auto">
            Entre em contato conosco e descubra ofertas exclusivas para você. Nossos consultores estão prontos para ajudar!
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition"
          >
            Fale com a gente
          </button>
        </div>
      </main>

      {/* MODAL - CAMPO DO FALE CONOSCO*/}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            <h1 className="text-2xl font-bold mb-6 text-center text-purple-700">Fale com a gente</h1>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Nome</label>
                <input 
                  className="w-full border border-gray-300 rounded-md p-3"
                  placeholder="Ex: João Silva"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Telefone</label>
                <input
                  className="w-full border border-gray-300 rounded-md p-3"
                  placeholder="Ex: (86) 9xxxx-xxxx"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Mensagem</label>
                <textarea className="w-full border border-gray-300 rounded-md p-3 min-h-[100px]" placeholder="Escreva sua mensagem" />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-md transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </>
  );
}


  

