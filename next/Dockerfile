FROM mhart/alpine-node:16.4.7
WORKDIR /

COPY package.json package.json

RUN yarn
EXPOSE 3001
COPY . .
CMD ["yarn", "dev"]