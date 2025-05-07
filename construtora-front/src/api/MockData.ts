import { ProjetoDto, ProjetoStatus, ProjetoTipo } from "../interfaces";

export const mockProjetos: ProjetoDto[] = [
  {
    id: 1,
    titulo: "Residencial Morada Verde",
    quantidadeVagas: 10,
    quantidadeGaragem: 2,
    status: ProjetoStatus.EM_ANDAMENTO,
    temPiscina: true,
    tipo: ProjetoTipo.CASA,
    quantidadeQuartos: 4,
    endereco: "Rua das Acácias, 123",
    cidade: "Teresina",
    descricao: "Condomínio fechado com infraestrutura completa para famílias."
  },
  {
    id: 2,
    titulo: "Edifício Panorama",
    quantidadeVagas: 50,
    quantidadeGaragem: 1,
    status: ProjetoStatus.FINALIZADO,
    temPiscina: false,
    tipo: ProjetoTipo.APARTAMENTO,
    quantidadeQuartos: 2,
    endereco: "Av. Frei Serafim, 987",
    cidade: "Teresina",
    descricao: "Apartamentos modernos no centro da cidade."
  },
  {
    id: 3,
    titulo: "Condomínio Solar dos Ipês",
    quantidadeVagas: 8,
    quantidadeGaragem: 3,
    status: ProjetoStatus.EM_ANDAMENTO,
    temPiscina: true,
    tipo: ProjetoTipo.CASA,
    quantidadeQuartos: 5,
    endereco: "Estrada do Uruguai, 456",
    cidade: "Teresina",
    descricao: "Casas de alto padrão com área de lazer completa."
  },
  {
    id: 4,
    titulo: "Village das Palmeiras",
    quantidadeVagas: 5,
    quantidadeGaragem: 2,
    status: ProjetoStatus.FINALIZADO,
    temPiscina: false,
    tipo: ProjetoTipo.CASA,
    quantidadeQuartos: 3,
    endereco: "Rua dos Coqueiros, 321",
    cidade: "Altos",
    descricao: "Residencial de casas térreas ideal para famílias que buscam conforto e praticidade."
  }
];
