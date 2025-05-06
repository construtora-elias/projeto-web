package com.db.construtora.service;

import org.springframework.stereotype.Service;

import com.db.construtora.repositories.ArquivoRepository;

@Service
public class ArquivoService {
    private final ArquivoRepository arquivoRepository;

    public ArquivoService(ArquivoRepository arquivoRepository) {
        this.arquivoRepository = arquivoRepository;
    }
}
