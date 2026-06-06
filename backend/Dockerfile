FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .
RUN npm run build

EXPOSE 4174
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
