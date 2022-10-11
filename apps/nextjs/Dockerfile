FROM node:18-buster AS next-builder
# Set working directory
WORKDIR /next
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=nextjs --docker

# Add lockfile and package.jsons of isolated subworkspace
FROM node:18-buster AS next-installer
WORKDIR /next

# First install dependencies (as they change less often)
COPY .gitignore .gitignore
COPY . .
COPY --from=next-builder /next/out/json/ .
COPY --from=next-builder /next/out/yarn.lock ./yarn.lock
RUN yarn install

# Build the project and its dependencies
COPY --from=next-builder /next/out/full/ .
COPY turbo.json turbo.json
CMD ["yarn", "dev"]
