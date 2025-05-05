package com.db.construtora.entities.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ProjetoTipo {
    CASA("Casa"),
    APARTAMENTO("Apartamento");

    private final String label;

    ProjetoTipo(String label) {
        this.label = label;
    }

    @JsonValue
    public String getLabel() {
        return this.label;
    }

    @Override
    public String toString() {
        return label;
    }
}
