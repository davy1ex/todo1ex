# Используем официальный образ Node.js с Alpine
FROM node:18-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы `package.json` и `package-lock.json` (или `yarn.lock` если используется yarn)
COPY my-react-app/package*.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем остальные файлы проекта в контейнер
COPY my-react-app/ ./

# Собираем приложение для продакшена (если необходимо)
# RUN npm run build

# Открываем порт 3000 для доступа к серверу разработки
EXPOSE 5173

# Запускаем приложение в режиме разработки
CMD ["npm", "run", "dev"]
