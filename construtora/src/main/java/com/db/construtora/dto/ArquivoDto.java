package com.db.construtora.dto;

import java.util.UUID;

import com.db.construtora.entities.enums.ArquivoTipo;

public record ArquivoDto(
    UUID id,
    String titulo,
    ArquivoTipo tipo,
    String path
) {
    
}
