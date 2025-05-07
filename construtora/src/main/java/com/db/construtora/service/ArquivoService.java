package com.db.construtora.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.db.construtora.dto.ArquivoCreationDto;
import com.db.construtora.dto.ArquivoDto;
import com.db.construtora.dto.DtoUtils;
import com.db.construtora.entities.Arquivo;
import com.db.construtora.entities.Projeto;
import com.db.construtora.repositories.ArquivoRepository;
import com.db.construtora.repositories.ProjetoRepository;
import com.db.construtora.service.exception.ArquivoStorageException;
import com.db.construtora.service.exception.ProjetoNotFound;

@Service
public class ArquivoService {

    private final ArquivoRepository arquivoRepository;
    private final ProjetoRepository projetoRepository;

    private static final String UPLOAD_DIR = "/home/marcos/Área de Trabalho/projeto-web/construtora/src/main/resources/uploads";

    public ArquivoService(ArquivoRepository arquivoRepository, ProjetoRepository projetoRepository) {
        this.arquivoRepository = arquivoRepository;
        this.projetoRepository = projetoRepository;
    }

    @Transactional
    public List<ArquivoDto> create(ArquivoCreationDto dto) {

        
            Projeto projeto = projetoRepository.findById(dto.projetoId()).orElseThrow(ProjetoNotFound::new);
            
            String projetoDirPath = UPLOAD_DIR + '/' + projeto.getId().toString();
            File projetoDir = new File(projetoDirPath);
    
            if (!projetoDir.exists()) projetoDir.mkdirs();

            List<ArquivoDto> result = dto.file().stream().map(file -> {
                try {

                String originalFileName = file.getOriginalFilename();
        
                String absolutePath = projetoDirPath + "/" + originalFileName;
                String relativePath = "uploads/" + projeto.getId().toString();
        
                Path path = Paths.get(absolutePath);
                Files.write(path, file.getBytes());
    
                Arquivo arquivo = Arquivo.builder()
                .titulo(dto.titulo())
                .tipo(dto.tipo())
                .projeto(projeto)
                .path(relativePath)
                .build();
    
                Arquivo savedArquivo = arquivoRepository.save(arquivo);
                return DtoUtils.convertModelToDto(savedArquivo);

            } catch (IOException e) {
                throw new ArquivoStorageException("Erro ao salvar o arquivo");
            }
            }).toList();

            return result;


            

    
    }


}
