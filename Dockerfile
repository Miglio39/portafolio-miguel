# ETAPA 1: Compilación con Node.js (Debian slim evita errores de binarios nativos de Tailwind v4 / Vite)
FROM node:20-slim AS builder

WORKDIR /app

# Copiamos solo package.json para instalar las dependencias nativas de Linux limpiamente
COPY package.json ./

RUN npm install

# Copiamos el código fuente del proyecto
COPY . .

# Compilamos el proyecto para producción
RUN npm run build

# ETAPA 2: Servidor de producción ultraligero con Nginx
FROM nginx:stable-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]