package com.db.construtora.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.db.construtora.entities.Arquivo;

public interface ArquivoRepository extends JpaRepository<Arquivo, UUID>{
    
}
