# Pluga CLI [Beta]

Plataforma de aplicação da Pluga.

## Instalando

Pluga CLI é desenvolvida em Node.js `v24` e requer no mínimo a versão `v22.12`.

Exemplo de instalação com [nvm](https://github.com/creationix/nvm)

```sh
$ nvm install --lts=krypton
$ nvm use --lts=krypton
$ npm install -g pluga-cli
$ pluga --help
```

## Comandos

### init

```sh
$ pluga init path/to/my_app
```

O comando `init` inicia um novo Pluga app no caminho definido, com a estrutura
de pastas necessária e alguns exemplos de como configurar seu app.

A pasta raiz do app deve seguir o padrão *snake_case*, e será igual à
identificação do seu app na Pluga (ex: `$ pluga init pied_piper`).

Por padrão, o nome do seu app será a versão *CamelCase* do nome da pasta criada
(ex: "PiedPiper"). Você pode sobrescrever esse comportamento com a opção
`--app-name`.

Você pode escolher a suíte de testes do app com a opção `-t`:
`vitest` (padrão) ou `mocha` (ex: `$ pluga init pied_piper -t mocha`).

### test

```sh
$ pluga test
```

O comando `test` roda todos os testes do seu app, identificando automaticamente
a suíte usada: se o app tiver um `vitest.config.mjs`, roda com
[vitest](https://vitest.dev);
caso contrário, com [mocha](https://github.com/mochajs/mocha). Você pode adicionar um
[glob](https://en.wikipedia.org/wiki/Glob_%28programming%29) como parâmetro
para filtrar os testes que deseja rodar (ex: `$ pluga test test/triggers/*`).
