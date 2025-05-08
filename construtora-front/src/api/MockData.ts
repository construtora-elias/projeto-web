import { ProjetoDto, ProjetoStatus, ProjetoTipo } from "../interfaces";

export const mockProjetos: ProjetoDto[] = [
  // Empreendimentos gerais
  { id: 1, titulo: "Residencial Morada Verde", status: ProjetoStatus.EM_ANDAMENTO, tipo: ProjetoTipo.CASA, quantidadeQuartos: 4, quantidadeVagas: 10, quantidadeGaragem: 2, temPiscina: true, endereco: "Rua das Acácias, 123", cidade: "Teresina", descricao: "Condomínio fechado com infraestrutura completa para famílias." },
  { id: 2, titulo: "Edifício Panorama", status: ProjetoStatus.FINALIZADO, tipo: ProjetoTipo.APARTAMENTO, quantidadeQuartos: 2, quantidadeVagas: 50, quantidadeGaragem: 1, temPiscina: false, endereco: "Av. Frei Serafim, 987", cidade: "Teresina", descricao: "Apartamentos modernos no centro da cidade." },
  { id: 3, titulo: "Condomínio Solar dos Ipês", status: ProjetoStatus.EM_ANDAMENTO, tipo: ProjetoTipo.CASA, quantidadeQuartos: 5, quantidadeVagas: 8, quantidadeGaragem: 3, temPiscina: true, endereco: "Estrada do Uruguai, 456", cidade: "Teresina", descricao: "Casas de alto padrão com área de lazer completa." },
  { id: 4, titulo: "Village das Palmeiras", status: ProjetoStatus.FINALIZADO, tipo: ProjetoTipo.CASA, quantidadeQuartos: 3, quantidadeVagas: 5, quantidadeGaragem: 2, temPiscina: false, endereco: "Rua dos Coqueiros, 321", cidade: "Altos", descricao: "Residencial de casas térreas ideal para famílias que buscam conforto e praticidade." },

  // Lançamentos
  { id: 5, titulo: "Residencial Green Valley", status: ProjetoStatus.LANCAMENTO, tipo: ProjetoTipo.CASA, quantidadeQuartos: 4, quantidadeVagas: 12, quantidadeGaragem: 2, temPiscina: true, endereco: "Rua Nova Esperança, 777", cidade: "Parnaíba", descricao: "Novo lançamento com foco em sustentabilidade e lazer." },
  { id: 6, titulo: "Edifício Vista Lago", status: ProjetoStatus.LANCAMENTO, tipo: ProjetoTipo.APARTAMENTO, quantidadeQuartos: 3, quantidadeVagas: 20, quantidadeGaragem: 1, temPiscina: false, endereco: "Av. Beira Lago, 55", cidade: "Teresina", descricao: "Apartamentos com vista privilegiada e design moderno." },
  { id: 7, titulo: "Condomínio Jardins do Sul", status: ProjetoStatus.LANCAMENTO, tipo: ProjetoTipo.CASA, quantidadeQuartos: 5, quantidadeVagas: 6, quantidadeGaragem: 2, temPiscina: true, endereco: "Rua das Flores, 999", cidade: "Teresina", descricao: "Residencial exclusivo com segurança 24h." },
  { id: 8, titulo: "Village Horizonte Azul", status: ProjetoStatus.LANCAMENTO, tipo: ProjetoTipo.CASA, quantidadeQuartos: 3, quantidadeVagas: 8, quantidadeGaragem: 2, temPiscina: false, endereco: "Rua Horizonte, 1234", cidade: "Parnaíba", descricao: "Casas modernas com área gourmet integrada." }
];

