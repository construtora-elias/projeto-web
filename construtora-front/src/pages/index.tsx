import { useEffect, useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import EmpreendimentoCard from "../components/EmpreendimentoCard";
import { ProjetoDto } from "../interfaces";


export default function Home() {
  const [empreendimentos, setEmpreendimentos] = useState<ProjetoDto[]>([]);


  return (
    // Container Geral
    <main className="mx-auto p-8 max-w-6xl">
      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold mb-8 text-center mt-10">Empreendimentos</h1>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {empreendimentos.map((item) => (
          <EmpreendimentoCard
            key={item.id}
            endereco={item.endereco || "Sem endereço"}
            tamanho={item.quantidadeQuartos || 0}
            quartos={item.quantidadeQuartos || 0} cidade={""} tipo={""} vagas={0}          />
        ))}
        
        
      </div>
      
    </main>
  );
}
