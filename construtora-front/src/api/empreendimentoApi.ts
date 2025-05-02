export interface Empreendimento {
    _id: string;
    endereco: string;
    tamanho: number;
    quantidadeQuartos: number;
    imagens: {
      _id: string;
      url: string;
    }[];
  }
  
  export async function getEmpreendimentos(): Promise<Empreendimento[]> {
    const query = encodeURIComponent(`*[_type == "empreendimento"]{
      _id,
      endereco,
      tamanho,
      quantidadeQuartos,
      imagens[]{
        asset->{
          _id,
          url
        }
      }
    }`);
  
    const projectId = 'pq2a8e19'; // Ajuste aqui
    const dataset = 'production';     // Ajuste aqui
    const apiVersion = '2025-05-02';   // Ajuste aqui se necessário
  
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
  
    const res = await fetch(url, {
      next: { revalidate: 60 }, // Otimização para SSR + ISR no Next.js 13+
    });
  
    if (!res.ok) {
      throw new Error('Falha ao buscar empreendimentos');
    }
  
    const data = await res.json();
    return data.result as Empreendimento[];
  }
  