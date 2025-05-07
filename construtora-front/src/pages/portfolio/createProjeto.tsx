'use client'

import { useState } from 'react';
import { ProjetoDto } from '../../interfaces';
import { createProjeto } from '../../api/axios';

export default function CreateProjeto() {
  const [projeto, setProjeto] = useState<ProjetoDto>({
    titulo: '',
    quantidadeVagas: 0,
    quantidadeGaragem: 0,
    status: null,
    temPiscina: false,
    tipo: '',
    quantidadeQuartos: 0,
    endereco: '',
    cidade: '',
    descricao: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setProjeto(prev => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setProjeto(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProjeto(projeto);
      alert('Projeto criado com sucesso.');
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
      alert('Erro ao criar projeto.');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-8 text-center">Criar Projeto</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

          <div className="flex flex-col">
            <label htmlFor="titulo" className="text-gray-700 font-medium mb-1">Título</label>
            <input id="titulo" name="titulo" value={projeto.titulo} onChange={handleChange} placeholder="Título" className="border border-gray-300 p-3 rounded-md" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="status" className="text-gray-700 font-medium mb-1">Status</label>
            <input id="status" name="status" value={projeto.status} onChange={handleChange} placeholder="Status" className="border border-gray-300 p-3 rounded-md" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantidadeVagas" className="text-gray-700 font-medium mb-1">Quantidade de Vagas</label>
            <input type="number" id="quantidadeVagas" name="quantidadeVagas" value={projeto.quantidadeVagas} onChange={handleChange} placeholder="Vagas" className="border border-gray-300 p-3 rounded-md" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantidadeGaragem" className="text-gray-700 font-medium mb-1">Quantidade de Garagem</label>
            <input type="number" id="quantidadeGaragem" name="quantidadeGaragem" value={projeto.quantidadeGaragem} onChange={handleChange} placeholder="Garagem" className="border border-gray-300 p-3 rounded-md" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="tipo" className="text-gray-700 font-medium mb-1">Tipo</label>
            <input id="tipo" name="tipo" value={projeto.tipo} onChange={handleChange} placeholder="Tipo" className="border border-gray-300 p-3 rounded-md" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantidadeQuartos" className="text-gray-700 font-medium mb-1">Quantidade de Quartos</label>
            <input type="number" id="quantidadeQuartos" name="quantidadeQuartos" value={projeto.quantidadeQuartos} onChange={handleChange} placeholder="Quartos" className="border border-gray-300 p-3 rounded-md" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="endereco" className="text-gray-700 font-medium mb-1">Endereço</label>
            <input id="endereco" name="endereco" value={projeto.endereco} onChange={handleChange} placeholder="Endereço" className="border border-gray-300 p-3 rounded-md" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cidade" className="text-gray-700 font-medium mb-1">Cidade</label>
            <input id="cidade" name="cidade" value={projeto.cidade} onChange={handleChange} placeholder="Cidade" className="border border-gray-300 p-3 rounded-md" />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="descricao" className="text-gray-700 font-medium mb-1">Descrição</label>
            <textarea id="descricao" name="descricao" value={projeto.descricao} onChange={handleChange} placeholder="Descrição" className="border border-gray-300 p-3 rounded-md min-h-[100px]" />
          </div>

          <div className="flex items-center gap-3 md:col-span-2">
            <input type="checkbox" id="temPiscina" name="temPiscina" checked={projeto.temPiscina} onChange={handleChange} />
            <label htmlFor="temPiscina" className="text-gray-700 font-medium">Tem Piscina</label>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Criar Projeto
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}
