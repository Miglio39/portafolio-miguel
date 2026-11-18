# ETAPA 1: Compilación con Node.js 22
FROM node:22-slim AS builder

WORKDIR /app

# Copiar manifiesto e instalar dependencias incluyendo binarios opcionales de Linux
COPY package.json ./
RUN npm install --include=optional

# Copiar el código fuente del proyecto
COPY . .

# Compilar el bundle de producción directamente con Vite
RUN npx vite build

# ETAPA 2: Servidor de producción ultraligero con Nginx
FROM nginx:stable-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]