# Pizza Army

Este projeto foi desenvolvido com o objetivo de participar do desafio de teste técnico.

> As seções a seguir descrevem como executar o projeto. Na última seção, abordarei minhas escolhas de ferramentas e o contexto do meu desenvolvimento neste desafio.

> No desenvolvimento do teste, utilizei o Node.js na versão 16.20.1, no entanto, acredito que funcionará para versões mais recentes do Node.js.

## Instalando as dependências

Para facilitar a instalação das dependências, foi criado um script que, ao ser executado, fará o download das dependências relacionadas à aplicação e a API:

```
npm run setup
```

Ou

```
npm i
```

e

```bash
cd .\simple-api\
```

```bash
npm i
```

## Executando

Abra um terminal e execute:

```
npm run dev
```

Abra outro terminal e execute:

```
npm run api
```

## Páginas

As páginas disponíveis são a página que está disponível na rota raiz e para acessar o painel administrativo basta adicionar `/admin` na rota raiz do projeto.

## Contexto de desenvolvimento

Para enfrentar esse desafio, decidi utilizar o VueJS e o Vuetify como minhas principais ferramentas.

Minha escolha foi fundamentada na busca pela agilidade no desenvolvimento do projeto de pequeno porte. O VueJS oferece um pacote quase completo para a criação de Single Page Applications (SPAs) e sua sintaxe é simples e seus utilitários de reatividade ajudam no processo de criar interfaces dinâmicas com facilidade. Embora também pudesse ter optado pelo React (com ou sem NextJS) ou pelo Angular, que são ferramentas com as quais estou familiarizado.
