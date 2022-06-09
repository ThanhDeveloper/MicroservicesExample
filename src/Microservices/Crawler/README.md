<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">


## Description

This project is implemented using nestjs - a framework based on nodejs

This application includes:

- Backend: NestJs (Nodejs framework)
- Database: Postgres SQL
- ORM library for Nodejs: Sequelize
- Service layer and repository pattern, module pattern, dependence injection, automapper, rate limiter, etc...
- Unit testing: Jest (JavaScript Testing Framework - Meta)

## Installation

```bash
$ npm install
```

## Set up Environment

please create file ```.env``` similar to file ```.env.sample``` and change your config

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Sequelize

```
# install sequelize cli to run command
$ npm install -g sequelize-cli

# create database
$ sequelize db:create

# migration database
$ sequelize db:migrate
```


## Nest

```
# install nest cli to run command
$ npm i -g @nestjs/cli

# CLI's CRUD generator
$ nest g resource [name] 

# create a controller 
$ $ nest g controller [controller_name] 
```

## API sample

| HTTP Requests     | URL          | Method |
|-------------------| ------------ |--------|
| Index entry point | /            | `GET`  |
| Login             | api/v1/users | `POST`    |
| SignUp            | api/v1/users | `POST`  |
| Get all users     | api/v1/users | `GET`  |
| Get user by id    | api/v1/users/:id | `GET`  |

## Swagger docs

- Open API documentation with nestjs/swagger

## Document

- Nest is an MIT-licensed open source project. read document alter using this repository at  [NestJsDocs](https://docs.nestjs.com).
- Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more at [SequelizeDocs](https://sequelize.org/).
- Automapper: https://www.npmjs.com/package/@automapper/nestjs (current highest version v7)

## Docker supports

```
# run docker compose on detach mode
$ docker-compose up --detach
```


## CI/CD

This project using GitHub Action for config ci/cd

## License

Nest is [MIT licensed](LICENSE).
