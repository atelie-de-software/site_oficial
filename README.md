# Site Oficial do Ateliê de Software

## Rodar em Desenvolvimento

* Buildar a imagem

```bash
docker-compose build web
```

* Rodar o Yarn no container

```bash
docker-compose --rm web yarn install
```

* Subir o container

```bash
docker-compose up web
```

O site estará disponível na URL: [http://localhost:5000]


## Comandos internos do Yarn para rodar e gerar o html

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:5000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
