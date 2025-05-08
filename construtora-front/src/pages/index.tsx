import { useEffect, useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import EmpreendimentoCard from "../components/EmpreendimentoCard";
import { ProjetoDto } from "../interfaces";
import { mockProjetos } from "../api/MockData";


export default function Home() {
  // const [empreendimentos, setEmpreendimentos] = useState<ProjetoDto[]>([]);
  const empreendimentos = mockProjetos


  const imagens = [
    { url: '/images/foto1.jpg', descricao: 'Ui' },
    { url: '/images/foto2.jpg', descricao: '' },
    { url: '/images/foto3.jpg', descricao: '' },
  ];

  return (
    <main className="mx-auto p-8 max-w-6xl">
      {/* HERO CAROUSEL COM IMAGENS */}
      <HeroCarousel imagens={imagens} />

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold mb-8 text-center mt-10">Empreendimentos</h1>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {empreendimentos.map((item) => (
          <EmpreendimentoCard key={item.id} projetoItem={item} />
        ))}
      </div>
    </main>
  );
}