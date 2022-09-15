# Dcycle &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://es.wikipedia.org/wiki/Licencia_MIT) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://docs.npmjs.com/cli/v8/commands/npm-version)

Prueba Técnica de la empresa Dcycle

#### Ejercicio 1

- Crear un formulario que le pida al usuario que introduzca su nombre
- Tras introducir el nombre llamar a las 3 apis para obtener la distinta información
- Crear un componente que muestre el género más probable junto con la probabilidad, también todas las nacionalidades probables (si puede ser con un icono que sea su bandera) y su probabilidad, y también la edad más probable.

#### Ejercicio 2

- Crear un componente (o componentes) que muestre información relevante sobre el covid en Estados Unidos por días. Puedes crear un componente para cada información, componentes que relacionen 2 o más métricas o lo que creas necesario para representar esta información de forma que un usuario pueda entenderla.

## Instalación y lanzamiento

Instalar docker si aun lo lo tienes instalado

#### Etapa de desarrollo

```shell
docker compose -f docker-compose.dev.yml up -d --build
```

localhost:3000

#### Etapa de Producción

```shell
docker compose -f docker-compose.prod.yml up -d
```

localhost

#### Lanzar sin docker

Tambien se puede ejecutar sin docker de la siguiente forma

```shell
npm run start
```
