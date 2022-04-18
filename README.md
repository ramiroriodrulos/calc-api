# calc-api

Simple calculator API

## Dependencias

-   node > v16
-   express > v4

## Instalar dependencias

`npm install`

### Iniciar la app en modo desarrollo

`npm run dev`

### Iniciar la app en modo producción

`npm start`

## Archivos

-   `/src/app.js`: Configuración de la app de express. En este archivo se configura las rutas, el logger, etc.
-   `/src/controllers.js`: Configuración de las rutas o controladores de la app. En este archivo esta la lógica de negocio
-   `/src/db.js`: Configuración de la base de datos. Que base de datos usamos, donde esta ubicada, credenciales, etc
-   `/src/models.js`: Configuración del ORM.

## API

| Endpoint          | Method | Description                                     |
| ----------------- | ------ | ----------------------------------------------- |
| /api/v1/add/:a/:b | GET    | Add `a` and `b`. Returns the result             |
| /api/v1/res/:a/:b | GET    | Rest `a` and `b`. Returns the result            |
| /api/v1/mul/:a/:b | GET    | Multiply `a` and `b`. Returns the result        |
| /api/v1/div/:a/:b | GET    | Divide `a` and `b`. Returns the result or Error |
| /api/v1/hisotry   | GET    | Returns the operations history                  |
