package com.db.construtora.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.construtora.service.ProjetoService;

@RestController
@RequestMapping
public class ProjetoController {
    private final ProjetoService projetoService;

    public ProjetoController(ProjetoService projetoService) {
        this.projetoService = projetoService;
    }
}
