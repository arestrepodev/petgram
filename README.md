# Petgram - Tu App de Fotos de Mascotas

Aplicación para ver las mejores fotos de mascotas en un solo lugar, gatitos, perros y más...

## Instalación

Este es un proyecto frontend, realizado con **react.js**. Para poder empezar:

### Pre-requisitos

`node.js 12x, npm, now.js`

### Instalación

Una vez clonado el proyecto ejecutar:

```
npm install
```

Para correr el proyecto en desarrollo:

```
npm run dev
```

Para correr el proyecto en producción:

```
npm run build
```

### Deploy

Para realizar deploy con _zeit_ y _now.js_

Instalar now.js de forma global:

```
  npm i -g now
```

Ejecutar el comando para compilar y enviar al servidor, reacuerda loggearte con tu cuenta de zeit y configurar el archivo `now.json` con los datos de la aplicación:

```
  now
```

### Testing

El proyecto usa **cypress** como herramienta de testing _end to end_, para ejecutar el test:

```
  ./node_modules/.bin/cypress open
```

## Construido con:

- [React](https://es.reactjs.org/): Libreria JavaScript
- [GraphQL](https://graphql.org/learn/) - Lenguaje de Consultas para API´s.
- [Cypress](https://www.cypress.io/): Testing End to End
- [Zeit](https://zeit.co/docs): Plataforma para sitios web estáticos.

## Autores

- **Arnold Restrepo** - _Desarrollo_ - [Ver Sitio Web](https://arnoldrestrepo.com)
