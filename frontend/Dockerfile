# frontend/Dockerfile
FROM node:18 AS build

# Установка зависимостей и сборка проекта
WORKDIR /frontend
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Порт для Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]