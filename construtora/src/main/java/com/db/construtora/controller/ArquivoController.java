package com.db.construtora.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.db.construtora.dto.ArquivoCreationDto;
import com.db.construtora.dto.ArquivoDto;
import com.db.construtora.entities.enums.ArquivoTipo;
import com.db.construtora.service.ArquivoService;

@RestController
@RequestMapping("/arquivos")
public class ArquivoController {
    private final ArquivoService arquivoService;

    public ArquivoController(ArquivoService arquivoService) {
        this.arquivoService = arquivoService;
    }

    @PostMapping
    public ResponseEntity<List<ArquivoDto>> uploadArquivo(
        @RequestParam("titulo") String titulo,
        @RequestParam("tipo") ArquivoTipo tipo,
        @RequestParam("projetoId") UUID projetoId,
        @RequestParam("file") List<MultipartFile> files
    ) {

        ArquivoCreationDto arquivo = new ArquivoCreationDto(titulo, tipo, projetoId, files);
        return ResponseEntity.status(HttpStatus.CREATED).body(arquivoService.create(arquivo));
    }
}
