package com.db.construtora.dto;

import java.util.List;
import java.util.function.Function;

public class DtoUtils {
    
    public static <T, R> List<R> convertModelListToDto(List<T> modelList, Function<T,R> mapper) {
        return modelList.stream().map(mapper).toList();
    } 
}
