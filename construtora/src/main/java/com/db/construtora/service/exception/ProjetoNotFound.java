package com.db.construtora.service.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ProjetoNotFound extends NotFoundException{
    public ProjetoNotFound() {
        super("Projeto não encontrado");
    }
}
