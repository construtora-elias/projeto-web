package com.db.construtora.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping(value = "projeto")
    public ResponseEntity<List<ProjetoDto>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(projetoService.getAll());
    }

    @GetMapping(value = "/{projetoId}")
    public ResponseEntity<ProjetoDto> getProjetoById(@PathVariable UUID projetoId){
        return ResponseEntity.status(HttpStatus.OK).body(projetoService.findProjetoById(projetoId));
    }

    

    


}
