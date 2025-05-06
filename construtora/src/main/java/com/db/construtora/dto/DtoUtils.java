package com.db.construtora.dto;

import java.util.List;
import java.util.function.Function;


import com.db.construtora.entities.Arquivo;

import com.db.construtora.entities.Projeto;


public class DtoUtils {

    public static ArquivoDto convertModelToDto(Arquivo arquivo) {
        return new ArquivoDto(
            arquivo.getId(),
            arquivo.getTitulo(),
            arquivo.getTipo(),
            arquivo.getPath()
        );
    }
    
    public static <T, R> List<R> convertModelListToDto(List<T> modelList, Function<T,R> mapper) {
        return modelList.stream().map(mapper).toList();
    } 

    public static Projeto toEntity(ProjetoCreationDto projetoCreationDto) {
        return Projeto.builder()
            .titulo(projetoCreationDto.titulo()) 
            .quantidadeVagas(projetoCreationDto.quantidadeVagas())
            .quantidadeGaragem(projetoCreationDto.quantidadeGaragem())
            .status(projetoCreationDto.status())
            .temPiscina(projetoCreationDto.temPiscina())
            .tipo(projetoCreationDto.tipo())
            .quantidadeQuartos(projetoCreationDto.quantidadeQuartos())
            .endereco(projetoCreationDto.endereco())
            .cidade(projetoCreationDto.cidade())
            .descricao(projetoCreationDto.descricao())
            .build();
    }

    public static ProjetoDto convertModelToDto(Projeto projeto){
        return new ProjetoDto(
            projeto.getId(),
            projeto.getTitulo(),
            projeto.getQuantidadeVagas(),
            projeto.getQuantidadeGaragem(),
            projeto.getStatus(),
            projeto.isTemPiscina(),
            projeto.getTipo(),
            projeto.getQuantidadeQuartos(),
            projeto.getEndereco(),
            projeto.getCidade(),
            projeto.getDescricao()
        );
    }
}
