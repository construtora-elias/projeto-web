package com.db.construtora.service;

import org.springframework.stereotype.Service;

import com.db.construtora.repositories.ProjetoRepository;

@Service
public class ProjetoService {
    
    private final ProjetoRepository projetoRepository;

    public ProjetoService(ProjetoRepository projetoRepository) {
        this.projetoRepository = projetoRepository;
    }

    

}
