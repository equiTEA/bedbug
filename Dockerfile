FROM node:18-slim
RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app
# RUN yarn global add turbo
# RUN npm install -g turbo
COPY . .

RUN yarn install
RUN yarn package

EXPOSE 3000
EXPOSE 3001


CMD ["yarn", "dev"]