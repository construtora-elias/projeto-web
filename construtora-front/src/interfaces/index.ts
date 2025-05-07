// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';


export type ProjetoDto = {
  id?: number;
  titulo: string;
  quantidadeVagas: number;
  quantidadeGaragem: number;
  status: ProjetoStatus; 
  temPiscina: boolean;

  tipo: ProjetoTipo; 

  quantidadeQuartos: number;
  endereco: string;
  cidade: string;
  descricao: string;
}

export enum ProjetoStatus {
  FINALIZADO = "Finalizado",
  EM_ANDAMENTO = "Em andamento"
}

// usar em dropDown
export const ProjetoStatusOptions = [
  { value: ProjetoStatus.FINALIZADO, label: "Finalizado"},
  { value: ProjetoStatus.EM_ANDAMENTO, label: "Em andamento"}
]

export enum ProjetoTipo {
  CASA = "Casa",
  APARTAMENTO = "Apartamento"
}

export const ProjetoTipoOptions = [
  { value: ProjetoTipo.CASA, label: "Casa"},
  { value: ProjetoTipo.APARTAMENTO, label: "Apartamento"}
]


