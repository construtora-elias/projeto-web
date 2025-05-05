package com.db.construtora.entities.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ArquivoTipo {
    PDF("pdf"),
    JPG("jpg");

    private final String label;

    ArquivoTipo(String label) {
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
