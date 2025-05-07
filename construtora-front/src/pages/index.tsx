import { useEffect, useState } from "react";
import { getEmpreendimentos, Empreendimento } from "../api/empreendimentoApi";
import HeroCarousel from "../components/HeroCarousel";
import EmpreendimentoCard from "../components/EmpreendimentoCard";

export default function Home() {
  const [empreendimentos, setEmpreendimentos] = useState<Empreendimento[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getEmpreendimentos();
      setEmpreendimentos(data);
    }
    fetchData();
  }, []);

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
            key={item._id}
            endereco={item.endereco || "Sem endereço"}
            tamanho={item.tamanho || 0}
            quartos={item.quantidadeQuartos || 0} cidade={""} tipo={""} vagas={0}          />
        ))}
        
        
      </div>
      
    </main>
  );
}
