FROM node:18-slim
RUN apt-get update
RUN apt-get install -y openssl
RUN npm install -g pnpm

WORKDIR /app
# RUN yarn global add turbo
# RUN npm install -g turbo
COPY . .

RUN pnpm install
RUN pnpm package

EXPOSE 3000
EXPOSE 3001


CMD ["yarn", "dev"]