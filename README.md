### Project Structure
This is an official Yarn v1 starter [turborepo](https://turborepo.org) monorepo.

#### Apps and Packages
###### Apps
- `nextjs`: an [Next.js](https://nextjs.org) app (web app frontend)
- `keystone`: a [Keystone](https://keystonejs.com) app (GraphQL API)

###### Packages
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `hooks`: a stub React hooks library intended to be environment agnostic (i.e., React Native vs. React)
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

```
- apps
    |- nextjs
    |    |- package.json // ℹ️ project-specific dependencies
    |    |- node_modules // ℹ️ project-specific node_modules
    |- keystone
         |- package.json
         |- node_modules
- packages
    |- eslint-config-custom // ℹ️ ships w/ Turborepo - globally extensible eslint config
    |    |- package.json
    |    |- node_modules
    |- tsconfig // ℹ️ ships w/ Turborepo - globally extensible tsconfig
    |    |- package.json
    |    |- node_modules
    |- types // ℹ️Types shared between services and/or packages go here
    |    |- package.json
    |    |- node_modules
    |- ui // ℹ️ UI primitives (i.e., decoupled JSX and styles) go here
    |    |- package.json
    |    |- node_modules
    |- hooks // ℹ️ React logic (i.e., environment-agnostic, and decoupled from JSX and styles) go here
    |    |- package.json
    |    |- node_modules
    |- utility // ℹ️ misc. JS utilities go here
        |- package.json
         |- node_modules
node_modules // ℹ️ global node_modules
turbo.json // ℹ️ tells turbo how to structure, order, and build dependencies, and how to run services
package.json // ℹ️ global dependencies
```

### Two options for local development:
1) Docker - points to `.env`, no dependencies needed locally (slow on Mac, need to restart after changes)
2) Turborepo - `yarn dev:local` - points to `.env.local`; Yarn, `dotenv-cli`, and PotgreSQL installed (fast, hot-reloading)

### Prerequisites (local development, without docker)
- Yarn v1 (classic)
- `npm i -g dotenv-cli` - This package is used to point the dev environment to the corrent .env file
- (local development without docker only) PostgreSQL installed locally and a database. The `DATABASE_URL` provided in .env.example assumes you have a PostgreSQL database created with user `postgres`, no password, and is reachable at localhost:5432, with database name `bedbug`.

### Configure .env and .env.local
Use the .env.example as documentation to supply the necessary environment variables to a root-level `.env` and `.env.local` file.
`.env` is used by docker-compose, and `.env.local` is used when you want to just use your local machine.

### Order of operations (local development, without docker)
1) Generally, you'll need to build each package under `/packages`, before they can be consumed by the `/apps`. Turborepo
can build them all by running from the root:
```
yarn build:packages
```
2) With the packages built, run (from the root still):
```
yarn dev:local
```
This will point your Node processes to use .env.local

### Docker development
You can use docker to develop as well. This won't require any installations, other than the docker daemon and docker-compose. Ensure your .env file points to the service names referenced in the `.env` file, then use:
```
docker-compose up --build
```


