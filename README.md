# Cadastro de Dinossauros (Angular)
## Sobre

Este projeto é apenas um exemplo de auto estudo abordando conceitos básicos de desenvolvimento de uma SPA (Single Page Application) em Angular.

## Screenshots

![Tela inicial](https://github.com/sergio-lacerda/2021-04-Cadastro-Dinossauros-Angular/blob/master/documentacao/01-tela-inicial.jpg)
![Tela de cadastro](https://github.com/sergio-lacerda/2021-04-Cadastro-Dinossauros-Angular/blob/master/documentacao/02-tela-cadastro.jpg)

## Features

- Listagem de dinossauros
- Cadastro de novos dinossauros
- Alteração de dados de dinossauros
- Exclusão de dinossauros
- Página de créditos

## Tecnologias

O presente projeto foi desenvolvido utilizando as seguintes tecnologias

- [Angular](https://angular.io/)
- [Angular CLI](https://github.com/angular/angular-cli)
- [Angular Material](https://material.angular.io/)
- [JSON Server](https://www.npmjs.com/package/json-server)
- HTML / CSS

## Instalação

- Obtenha o arquivo de dados de dinossauros (db.json) que se encontra na pasta  "2021-04-Cadastro-Dinossauros-Angular\src\assets";
- Crie uma pasta para ser seu servidor de dados e copie o arquivo db.json para essa pasta.
- Caso não possua o JSON Server instalado, execute o seguinte comando:

```sh
npm install -g json-server 
```

- Inicie o JSON Server:

```sh
json-server --watch db.json
```

- Vá até a pasta raiz do projeto e instale:

```sh
cd 2021-04-Cadastro-Dinossauros-Angular
npm install
```

- Execute o projeto:

```sh
ng serve -o
```

