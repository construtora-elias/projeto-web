// schemas/empreendimento.js
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'empreendimento',
  title: 'Empreendimento',
  type: 'document',
  fields: [
    defineField({
      name: 'endereco',
      title: 'Endereço',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tamanho',
      title: 'Tamanho (m²)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'quantidadeQuartos',
      title: 'Quantidade de Quartos',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'imagens',
      title: 'Imagens',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
})
