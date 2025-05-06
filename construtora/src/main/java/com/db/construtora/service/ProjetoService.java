package com.db.construtora.service;

import org.springframework.stereotype.Service;

import com.db.construtora.dto.DtoUtils;
import com.db.construtora.dto.ProjetoCreationDto;
import com.db.construtora.dto.ProjetoDto;
import com.db.construtora.entities.Projeto;
import com.db.construtora.repositories.ProjetoRepository;

@Service
public class ProjetoService {
    
    private final ProjetoRepository projetoRepository;

    public ProjetoService(ProjetoRepository projetoRepository) {
        this.projetoRepository = projetoRepository;
    }


    public ProjetoDto createProjeto(ProjetoCreationDto projetoCreationDto){

        Projeto projeto = DtoUtils.toEntity(projetoCreationDto);

        Projeto projetoSaved = projetoRepository.save(projeto);

        return DtoUtils.convertModelToDto(projetoSaved);

    }
    

}
