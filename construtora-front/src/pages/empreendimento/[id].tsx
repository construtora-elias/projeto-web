import { useRouter } from 'next/router';
import Galeria from '../../components/galeria';

const projetos = [
  { id: '1', titulo: 'Projeto Um', imagem: '/imagens/foto1.jpeg' },
  { id: '2', titulo: 'Projeto Dois', imagem: '/imagens/foto2.jpeg' },
  { id: '3', titulo: 'Projeto Três', imagem: '/imagens/foto3.jpeg' },
  { id: '4', titulo: 'Projeto Quatro', imagem: '/imagens/foto4.jpeg' },
];

export default function EmpreendimentoDetalhe() {
  const router = useRouter();
  const { id } = router.query;

  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
      </div>
    );
  }

  const imagensGaleria = [
    '/imagens/foto1.jpeg',
    '/imagens/foto2.jpeg',
    '/imagens/foto3.jpeg',
    '/imagens/foto4.jpeg',
    '/imagens/foto4.jpeg',
    '/imagens/foto4.jpeg',
    '/imagens/foto4.jpeg',
    '/imagens/foto4.jpeg',
  ];

  return (
    <div className="bg-gray-100">
      {/* Topo */}
      <section className="p-8 bg-white">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Empreendimento
        </h1>
        <img
          src={projeto.imagem}
          alt={projeto.titulo}
          className="w-full max-w-[600px] h-90 object-cover rounded-lg mb-4 mx-auto"
        />
      </section>

      {/* Por que escolher */}
      <section className="p-8 bg-green-700 text-white text-center ">
        <h2 className="text-center text-2xl text-white font-bold mb-6">Por que escolher?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border rounded text-center">
            <h3 className="font-semibold mb-2">Localização central</h3>
            <p>Perto de faculdades, hospitais e shoppings.</p>
          </div>
          <div className="p-4 border rounded text-center text-white">
            <h3 className="font-semibold mb-2">Studios modernos</h3>
            <p>De 21m² a 37m², inteligentes e compactos.</p>
          </div>
          <div className="p-4 border rounded text-center">
            <h3 className="font-semibold mb-2">Alta demanda</h3>
            <p>Ideal para locação ou Airbnb.</p>
          </div>
          <div className="p-4 border rounded text-center">
            <h3 className="font-semibold mb-2">Infraestrutura completa</h3>
            <p>Áreas de lazer, coworking e segurança 24h.</p>
          </div>
        </div>
      </section>

      {/* Galeria usando componente separado */}
      <Galeria imagens={imagensGaleria} />

      {/* Plantas */}
      <section className="p-8 bg-white">
        <h2 className="text-center text-2xl font-bold mb-6">Tipos de Planta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <img
              src="/imagens/foto1.jpeg"
              alt="Planta 1"
              className="rounded mb-2"
            />
            <p className="font-semibold">TIPO A — 36m²</p>
            <p>02 apartamentos por pavimento, com banheiro e área técnica.</p>
          </div>
          <div className="border p-4 rounded">
            <img
              src="/imagens/foto1.jpeg"
              alt="Planta 2"
              className="rounded mb-2"
            />
            <p className="font-semibold">TIPO B — 36m²</p>
            <p>02 apartamentos por pavimento, com banheiro e área técnica.</p>
          </div>
        </div>
      </section>

      {/* Descrição geral */}
      <section className="text-center p-8 bg-green-700 text-white rounded">
        <h2 className="text-2xl font-bold mb-4">
          O empreendimento que se adequa à sua realidade nnnnn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-800 rounded">
            <p>
              O Aldebaram é um ativo de alta liquidez e valorização. Ideal para locação ou revenda.
            </p>
          </div>
          <div className="p-4 bg-green-800 rounded">
            <p>
              Imagine morar perto de tudo: universidades, hospitais e polos comerciais.
            </p>
          </div>
          <div className="p-4 bg-green-800 rounded">
            <p>
              Ideal para estudantes e famílias que buscam praticidade e conforto.
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="p-8 bg-gray-100 text-gray-700 text-center">
        <p className="mb-2">
          O que torna este projeto único? Desenvolvido para atender a investidores exigentes.
        </p>
        <div className="mt-4">
          <img src="/images/logo.png" alt="Logo" className="mx-auto h-12" />
          <p className="mt-2">Smart Imóveis | Copyright © 2025</p>
        </div>
      </footer>
    </div>
  );
}
