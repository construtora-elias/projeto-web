package com.db.construtora.dto;

import com.db.construtora.entities.enums.ProjetoTipo;

public record ProjetoCreationDto(
    String titulo,
    int quantidadeVagas,
    int quantidadeGaragem,
    ProjetoTipo status,
    boolean temPiscina,
    ProjetoTipo tipo,
    int quantidadeQuartos,
    String endereco,
    String cidade,
    String descricao) {
    
}
