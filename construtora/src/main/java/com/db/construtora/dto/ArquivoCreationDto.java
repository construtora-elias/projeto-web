package com.db.construtora.dto;

import java.util.List;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import com.db.construtora.entities.enums.ArquivoTipo;

public record ArquivoCreationDto(
    String titulo,
    ArquivoTipo tipo,
    UUID projetoId,
    List<MultipartFile> file
) {
    
}
