# Usa la imagen base de Node.js
FROM node:latest AS build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Compila la app de Angular para producción
RUN npm run build -- --configuration=production

# Configura el servidor web de producción (nginx, por ejemplo)
FROM nginx:latest

# Copia los archivos estáticos de la app compilada de la etapa anterior al directorio de HTML del servidor web
COPY --from=build /app/dist/proveedores-sinai /usr/share/nginx/html

# Expone el puerto 80 para que la app sea accesible desde afuera del contenedor
EXPOSE 80

# Comando para iniciar nginx al correr el contenedor
CMD ["nginx", "-g", "daemon off;"]
