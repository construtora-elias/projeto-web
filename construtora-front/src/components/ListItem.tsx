import React from "react";
import { ProjetoDto } from "../interfaces";
import EmpreendimentoCard from "./EmpreendimentoCard";

type ListItemProps = {
  projeto: ProjetoDto[];
};

const ListItem = ({ projeto }: ListItemProps) => {
  return (
    <div>
      {projeto.map((item) => (
        <EmpreendimentoCard key={`empre-${item.id}`} projetoItem={item} />
      ))}
    </div>
  );
};

export default ListItem;

