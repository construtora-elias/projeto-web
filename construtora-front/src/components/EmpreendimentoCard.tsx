import { ProjetoDto } from "../interfaces";

type EmpreendimentoCardProps = {
    endereco: string;
    cidade: string;
    tipo: string;
    quartos: number;
    vagas: number;
    tamanho:number;
  };
  
  export default function EmpreendimentoCard({projetoItem}) {
    const projeto = projetoItem as ProjetoDto
    return (
      <div className="bg-white rounded-lg shadow-lg max-w-xs w-full flex flex-col">
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Sua Imagem aqui cachorra</span>
        </div>
        <div className="bg-purple-700 text-white text-center py-2 text-sm font-semibold">
          {projeto.status}
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mb-1">{projeto.titulo}</h2>
            <p className="text-sm text-gray-600 mb-2">{projeto.cidade}</p>
            <p className="text-sm font-semibold mb-1">Tipo: {projeto.tipo}</p>
            <p className="text-sm text-gray-700 mb-1">Quartos: {projeto.quantidadeQuartos}</p>
            <p className="text-sm text-gray-700 mb-4">Vagas de Garagem: {projeto.quantidadeVagas}</p>
          </div>
          <button className="w-full border-2 border-purple-700 text-purple-700 px-4 py-2 rounded font-semibold hover:bg-purple-700 hover:text-white transition">
            Conheça
          </button>
        </div>
      </div>
    );
  }
  
  
  