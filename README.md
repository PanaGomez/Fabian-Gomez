
API RESTful para gestión de stock desarrollada en Node.js con Express y MongoDB.

- Node.js 
- MongoDB Atlas

COMO INICIAR PROYECTO

1. Clonar el repositorio desde el github.
2. Crear archivo .env
3. Instalar dependencias en terminal:
   ```bash
   npm install
   ```
4. Configurar variables de entorno:
   - Definir `MONGO_URI` con la CADENA DE CONEXION BRINDADA EN EL TXT DE ENTREGA.
   - Definir `API_KEY` y `JWT_SECRET` con los valores brindados en el txt de entrega.


Modo Desarrollo
```bash
npm run dev
```

Modo Producción
```bash
npm start
```

## Configuración de Base de Datos

El proyecto utiliza un cluster de MONGODB Atlas cuyos datos de conexion se encuentran en el archivo .env 'MONGO_URI' y los datos necesarios para realizar la conexion adecuada se encuentran en el archivo txt de entrega.



Ejemplo

PORT=3000
DB_PROVIDER=mongo
MONGO_URI=mongodb://localhost:27017/stock_db
API_KEY=123456
JWT_SECRET=supersecretkey

## Pruebas

Se incluye un archivo `tests/test.endpoints.http` para probar los endpoints utilizando la extensión REST Client (VSCode).
