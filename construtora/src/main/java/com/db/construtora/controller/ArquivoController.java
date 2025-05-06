package com.db.construtora.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.construtora.service.ArquivoService;

@RestController
@RequestMapping
public class ArquivoController {
    private final ArquivoService arquivoService;

    public ArquivoController(ArquivoService arquivoService) {
        this.arquivoService = arquivoService;
    }
}
