# Task Manager

Gerencie tarefas com frontend React + Vite e backend NestJS, ambos rodando em containers Docker.

## O que dá para fazer neste projeto?

- **Cadastrar tarefas:** Adicione novas tarefas com título.
- **Listar tarefas:** Visualize todas as tarefas cadastradas.
- **Buscar tarefas:** Filtre tarefas pelo título.
- **Marcar como concluída:** Altere o status das tarefas para "feito" ou "pendente".
- **Testar a API:** Use o Swagger para explorar e testar os endpoints da API.
- **Testes unitários:** Execute testes automatizados tanto no backend quanto no frontend.

---

## Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado

## Como rodar o projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/vinniebrito/task-manager.git
   cd task-manager
   ```

2. **Suba os containers:**
   ```sh
   docker-compose up
   ```
   > Na primeira vez, o Docker irá construir as imagens automaticamente.

3. **Acesse o frontend:**
   - Abra [http://localhost:3001](http://localhost:3001) no navegador para usar o sistema.

4. **Acesse o backend (API):**
   - [http://localhost:3000/](http://localhost:3000/) — mostra uma mensagem padrão indicando que o backend está rodando.
   - [http://localhost:3000/api](http://localhost:3000/api) — abre a documentação da API (Swagger), onde você pode testar e visualizar todos os endpoints disponíveis.
   - [http://localhost:3000/tasks](http://localhost:3000/tasks) — retorna os dados das tarefas cadastradas (endpoint da API).

## Estrutura dos serviços

- **Frontend:** React + Vite, disponível em `localhost:3001`
- **Backend:** NestJS, disponível em `localhost:3000`

## Variáveis de ambiente

- O arquivo `.env.docker` já está configurado para uso no Docker.
- Para desenvolvimento local, edite o `.env` conforme necessário.

## Rodando testes unitários

### Backend

Execute os testes unitários do backend dentro do container:
```sh
docker-compose exec backend npm test
```

### Frontend

Execute os testes do frontend dentro do container:
```sh
docker-compose exec frontend npm test
```

## Observações

- Se alterar arquivos do Dockerfile ou dependências, rode:
  ```sh
  docker-compose up --build
  ```
- Para parar os containers:
  ```sh
  docker-compose down
  ```
