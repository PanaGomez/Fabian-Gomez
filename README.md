# Proyecto Stock API

API RESTful para gestión de stock desarrollada en Node.js con Express y MongoDB.

## Requisitos Previos

- Node.js (v14+)
- MongoDB (Local o Atlas)

## Instalación

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno:
   - Renombrar `.env.example` a `.env` (o crear uno nuevo).
   - Definir `MONGO_URI` con tu cadena de conexión a MongoDB.
   - Definir `API_KEY` y `JWT_SECRET`.

## Ejecución

### Modo Desarrollo
```bash
npm run dev
```

### Modo Producción
```bash
npm start
```

## Configuración de Base de Datos

El proyecto utiliza MongoDB por defecto. Asegúrate de tener una instancia de MongoDB corriendo y la variable `MONGO_URI` correctamente configurada en el archivo `.env`.

Ejemplo `.env`:
```
PORT=3000
DB_PROVIDER=mongo
MONGO_URI=mongodb://localhost:27017/stock_db
API_KEY=123456
JWT_SECRET=supersecretkey
```

## Endpoints

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| POST | `/api/v1/productos` | Crear producto | No |
| GET | `/api/v1/productos` | Listar productos | No |
| GET | `/api/v1/productos/:id` | Obtener producto | No |
| PUT | `/api/v1/productos/:id` | Editar producto | Sí (API Key / Token) |
| DELETE | `/api/v1/productos/:id` | Eliminar producto | Sí (API Key / Token) |
| GET | `/api/v1/albums/csv` | Descargar CSV Albums | No |

## Pruebas

Se incluye un archivo `tests/test.endpoints.http` para probar los endpoints utilizando la extensión "REST Client" de VSCode.
