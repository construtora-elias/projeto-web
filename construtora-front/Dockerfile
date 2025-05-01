# Imagem base oficial do Node.js
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código para dentro do container
COPY . .

# Expor a porta padrão do Next.js
EXPOSE 3000

# Comando para rodar o Next.js em modo dev
CMD ["npm", "run", "dev"]
