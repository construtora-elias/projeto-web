package com.db.construtora.entities.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ProjetoStatus {
    FINALIZADO("Finalizado"),
    EM_ANDAMENTO("Em andamento");

    private final String label;

    ProjetoStatus(String label) {
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
