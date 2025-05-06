package com.db.construtora.dto;

import java.util.UUID;

import com.db.construtora.entities.enums.ProjetoTipo;

public record ProjetoDto(
    UUID id,
    String titulo,
    int quantidadeVagas,
    int quantidadeGaragem,
    ProjetoTipo status,
    boolean temPiscina,
    ProjetoTipo tipo,
    int quantidadeQuartos,
    String endereco,
    String cidade,
    String descricao
) {
}
