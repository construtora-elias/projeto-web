package com.db.construtora.dto;

import java.util.List;
import java.util.function.Function;

import com.db.construtora.entities.Arquivo;

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
}
