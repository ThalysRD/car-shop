# Car Shop

API REST para cadastrar, consultar, atualizar e remover carros, com persistência em MongoDB e validação de dados.

**Projeto de formação em backend — TypeScript, orientação a objetos, Express, Mongoose e Zod.**

## Funcionalidades implementadas

- Cadastro de carros com modelo, ano, cor, valor, quantidade de portas e assentos.
- Listagem de carros e consulta por identificador.
- Atualização e remoção de registros.
- Validação de entrada com Zod e de identificadores com Mongoose.
- Tratamento centralizado de erros.
- Testes unitários de model, service e controller com mocks e stubs.

O escopo exposto pela aplicação é **carros**. Há uma interface de motocicletas no código, mas ela não representa um CRUD de motocicletas implementado.

## Arquitetura

```text
src/
  routes/carsRoute.ts          # composição das dependências e endpoints
  controllers/CarController.ts
  services/CarService.ts       # validação e regras
  models/CarModel.ts
  models/VehicleModel.ts       # abstração genérica para persistência
  interfaces/                 # contratos e schemas Zod
  middlewares/error.ts        # tratamento de erros
  tests/unit/                 # testes de model, service e controller
```

A aplicação utiliza contratos `IModel<T>` e `IService<T>` e recebe dependências por construtor. A abstração `VehicleModel<T>` concentra operações de persistência reaproveitáveis.

## Executar

O Compose original utiliza Node 16.14 e MongoDB 5.0.7. Na raiz do projeto:

```sh
docker compose up -d --build
docker compose exec node npm ci
docker compose exec node npm run dev
```

A API fica em **http://localhost:3001**. O serviço `node` inicia um shell no Compose; o comando `npm run dev` inicia efetivamente a API.

Para executar fora do container, configure `MONGO_URI` e `PORT`. A aplicação usa, por padrão, `mongodb://localhost:27017/CarShop` e a porta `3001`.

## Endpoints

| Método | Rota | Operação |
|---|---|---|
| POST | `/cars` | Criar carro |
| GET | `/cars` | Listar carros |
| GET | `/cars/:id` | Buscar carro |
| PUT | `/cars/:id` | Atualizar carro |
| DELETE | `/cars/:id` | Remover carro |

Exemplo de corpo para cadastro:

```json
{
  "model": "Fiat Uno",
  "year": 2010,
  "color": "Branco",
  "status": true,
  "buyValue": 25000,
  "doorsQty": 4,
  "seatsQty": 5
}
```

A atualização usa o schema completo de carro. A validação original limita o ano entre **1900 e 2022**; isso faz parte da versão de formação e precisa ser atualizado para aceitar modelos recentes.

## Testes da implementação

```sh
docker compose exec node npm run test:dev
docker compose exec node npm run test:coverage
```

Esses scripts executam os testes em `src/tests/unit/`, com Mocha, Chai, Sinon e NYC. O script `npm test` corresponde à suíte de avaliação original com Jest. A presença das suítes não implica cobertura integral; os testes não foram executados nesta etapa de documentação.

## O que este projeto demonstra

Uso de TypeScript com generics, interfaces e classes; composição de dependências; separação entre transporte HTTP, regras e persistência; validação de contratos de entrada; testes com isolamento de dependências.

## Autoria e créditos

**Thalys Rocha Rodrigues:** implementação de model, service, controller, rotas, contratos, validações, tratamento de erros e testes unitários, registrada no [PR original #50](https://github.com/tryber/sd-020-a-project-car-shop/pull/50). O repositório original é privado.

**Trybe:** enunciado, estrutura inicial, configuração e testes de avaliação. Os arquivos-base mantidos devem continuar creditados, e a publicação deve seguir a limpeza oficial da Trybe.

[GitHub](https://github.com/ThalysRD) · [Portfólio](https://portifolio-lyart-gamma-56.vercel.app/)
