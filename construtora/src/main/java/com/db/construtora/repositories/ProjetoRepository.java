package com.db.construtora.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.db.construtora.entities.Projeto;

public interface ProjetoRepository extends JpaRepository<Projeto, UUID>{
    
}
