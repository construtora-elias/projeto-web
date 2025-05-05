package com.db.construtora.entities;

import java.util.List;
import java.util.UUID;

import com.db.construtora.entities.enums.ProjetoTipo;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "project")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Projeto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String titulo;

    private int quantidadeVagas;

    private int quantidadeGaragem;

    @Enumerated(EnumType.STRING)
    private ProjetoTipo status;

    private boolean temPiscina;

    @Enumerated(EnumType.STRING)
    private ProjetoTipo tipo;

    private int quantidadeQuartos;

    private String endereco;

    private String cidade;

    @Lob
	@Column(columnDefinition = "TEXT")
	private String descricao;

    @OneToMany(mappedBy = "projeto", cascade = CascadeType.ALL)
    private List<Arquivo> arquivos;

    
}
