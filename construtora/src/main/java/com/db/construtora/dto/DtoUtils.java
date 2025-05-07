package com.db.construtora.dto;

import java.util.List;
import java.util.Optional;
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

    public static void updateProjetoFromDto(Projeto projeto, ProjetoDto projetoDto) {
        Optional.ofNullable(projetoDto.titulo()).filter(t -> !t.isBlank()).ifPresent(projeto::setTitulo);
        Optional.ofNullable(projetoDto.quantidadeVagas()).filter(v -> v > 0).ifPresent(projeto::setQuantidadeVagas);
        Optional.ofNullable(projetoDto.quantidadeGaragem()).filter(g -> g > 0).ifPresent(projeto::setQuantidadeGaragem);
        Optional.ofNullable(projetoDto.status()).ifPresent(projeto::setStatus);
        projeto.setTemPiscina(projetoDto.temPiscina());
        Optional.ofNullable(projetoDto.tipo()).ifPresent(projeto::setTipo);
        Optional.ofNullable(projetoDto.quantidadeQuartos()).filter(q -> q > 0).ifPresent(projeto::setQuantidadeQuartos);
        Optional.ofNullable(projetoDto.endereco()).filter(e -> !e.isBlank()).ifPresent(projeto::setEndereco);
        Optional.ofNullable(projetoDto.cidade()).filter(c -> !c.isBlank()).ifPresent(projeto::setCidade);
        Optional.ofNullable(projetoDto.descricao()).filter(d -> !d.isBlank()).ifPresent(projeto::setDescricao);
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
