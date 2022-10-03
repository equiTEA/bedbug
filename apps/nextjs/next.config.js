/** @type {import('next').NextConfig} */

const { env } = require('@bedbug/utility')

const nextConfig = {
  reactStrictMode: env.STRICT_MODE ?? true,
  swcMinify: true,
  rewrites: () => [
    {
      source: '/api/graphql',
      destination: env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    },
  ],
}

module.exports = nextConfig
