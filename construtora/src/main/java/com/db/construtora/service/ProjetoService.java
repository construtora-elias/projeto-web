package com.db.construtora.service;

import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;

import com.db.construtora.dto.DtoUtils;
import com.db.construtora.dto.ProjetoCreationDto;
import com.db.construtora.dto.ProjetoDto;
import com.db.construtora.entities.Projeto;
import com.db.construtora.repositories.ProjetoRepository;
import com.db.construtora.service.exception.ProjetoNotFound;

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

    public List<ProjetoDto> getAll(){
        List<Projeto> projetos = projetoRepository.findAll();
        return DtoUtils.convertModelListToDto(projetos, DtoUtils::convertModelToDto);
    }
    
    public ProjetoDto findProjetoById(UUID projetoId){
        Projeto projeto = projetoRepository.findById(projetoId).orElseThrow(ProjetoNotFound::new);
        return DtoUtils.convertModelToDto(projeto);
    }

    public ProjetoDto updateProjeto(UUID projetoId, ProjetoDto projetoDto){
        Projeto projeto = projetoRepository.findById(projetoId).orElseThrow(ProjetoNotFound::new);

        DtoUtils.updateProjetoFromDto(projeto, projetoDto);

        Projeto projetoUpdated = projetoRepository.save(projeto);

        return DtoUtils.convertModelToDto(projetoUpdated);
        
    }
    
    public void deleteProjetoById(UUID projetoId){
        projetoRepository.findById(projetoId).orElseThrow(ProjetoNotFound::new);

        projetoRepository.deleteById(projetoId);
    }

    public void deleteAllProjetos(){
        projetoRepository.deleteAll();
    }


}
