# API CRUD de Usuários com Node, Express, Docker, Postgre e Prisma.

## Descrição

Este projeto é uma API RESTful simples para gerenciamento de usuários, construída com Node.js, Express e Prisma ORM, utilizando PostgreSQL como banco de dados.

A API permite criar, listar e deletar usuários, fornecendo um backend leve e eficiente para aplicações que necessitem manipular dados de usuários.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Docker (para rodar o banco PostgreSQL)
- Beekeeper Studio (ferramenta para gerenciar banco de dados)

## Funcionalidades

- **Criar usuário**  
  Endpoint: `POST /usuarios/cadastro`  
  Permite adicionar um novo usuário com nome, email e idade.

- **Listar todos os usuários**  
  Endpoint: `GET /usuarios/todos`  
  Retorna uma lista com todos os usuários cadastrados.

- **Deletar usuário por ID**  
  Endpoint: `DELETE /usuarios/delete/:id`  
  Remove o usuário correspondente ao ID fornecido.

## Estrutura do Projeto

- `/src` - Código fonte da aplicação

  - `/controllers` - Funções que processam as requisições e interagem com o Prisma
  - `/routes.js` - Definição das rotas da API
  - `/models` - Arquivos relacionados ao modelo de dados (opcional, dependendo da arquitetura)
  - `/generated/prisma` - Cliente Prisma gerado automaticamente
  - `server.js` - Arquivo principal que inicializa o servidor Express

- `/prisma` - Schema Prisma e arquivos de migração
