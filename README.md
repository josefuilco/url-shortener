# Acortado de Urls - ShortLink
Es un acortador de enlaces creado con el stack MERN + Typescript, principalmente creado como proyecto personal para acortar links muy grandes y poder almacenarlos en un base de datos no sql.

## Tecnologias
Se utilizaron las siguientes tecnologias por la eficiencia y facilidad de uso para crear aplicaciones de manera rapida y efectiva, seguiendo una arquitectura en capas en cada una de ellas para tener un orden al momento de desarrollar.

* Mongodb
* Express
* React
* NodeJs
* Typescript
* Docker

## Requisitos previos
Para poder ejecutar la aplicación necesitas las siguientes tecnologias instaladas.

* Tener instaladas las tecnologias ya mencionadas.
* Crear la base de datos y colleción en mongodb.
* Configurar las variables de entorno para el backend y para el frontend.
```text
# .env backend
SERVER_PORT=3000
MONGO_URL=mongodb://localhost:27017
MONGO_DATABASE=db_shortener
MONGO_COLLECTION=links

# .env frontend
VITE_API=http://localhost:3000
```
* Instalar las dependencias del proyecto, tanto para el backend como para el frontend.
* Inicializar el proyecto con ```npm run dev``` en el backend y en el frontend.

## ¿Cómo inicializar el proyecto?
Para poder inicializar el proyecto

## Endpoints publicos
En el proyecto el backend lo deje con endpoints publicos para que al momento del despligue cualquiera pueda subir y pedir los enlaces recortados desde cualquier sitio.

```text
# POST /api/v1.0/public/link/uploadLink
  En este endpoint lo que se sube son los links con una estructura de json como la siguiente:
  Request:
  {
	"website": "http://www.holamundo.com"
  }
  Response:
  {
	"_id": "00000000"
  }

# GET /api/v1.0/public/link/findLink/:id
  En este endpoint no se sube ningun body, sino que a través del parametro solo pasan el id del link que quieres buscar y te traera el sitio web.
  Response:
  {
	"website": "http://www.holamundo.com"
  }

# GET /api/v1.0/public/link/allLinks
  En este endpoint no se sube ningun body, por si solo te traera todos los sitios web.
  Response:
  [
	{
		"_id": "00000000"
		"website": "http://www.holamundo.com"
  	}
  ]
```
