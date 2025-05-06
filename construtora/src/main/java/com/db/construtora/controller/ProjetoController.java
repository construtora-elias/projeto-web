package com.db.construtora.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.construtora.dto.ProjetoCreationDto;
import com.db.construtora.dto.ProjetoDto;
import com.db.construtora.service.ProjetoService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping
public class ProjetoController {
    private final ProjetoService projetoService;

    public ProjetoController(ProjetoService projetoService) {
        this.projetoService = projetoService;
    }

    @PostMapping(value = "projeto")
    public ResponseEntity<ProjetoDto> createProjeto(@RequestBody ProjetoCreationDto projetoCreationDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(projetoService.createProjeto(projetoCreationDto));
    }

}
