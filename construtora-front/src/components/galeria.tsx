import { useState } from 'react';

export default function Galeria({ imagens }: { imagens: string[] }) {
    const [mostrarTodas, setMostrarTodas] = useState(false);
  
    const imagensVisiveis = mostrarTodas ? imagens : imagens.slice(0, 4);
  
    return (
      <section className="p-8 bg-gray-200">
        <h2 className="text-center text-2xl font-bold mb-6">Galeria</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imagensVisiveis.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-64 object-cover rounded"
              alt={`Imagem ${index + 1}`}
            />
          ))}
        </div>
        {imagens.length > 4 && (
          <div className="text-center mt-4">
            <button
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              onClick={() => setMostrarTodas(!mostrarTodas)}
            >
              {mostrarTodas ? 'Mostrar menos' : 'Ver mais fotos'}
              <svg
                className={`w-4 h-4 transform transition ${mostrarTodas ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </section>
    );
  }
